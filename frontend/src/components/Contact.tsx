import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare, 
  Instagram, 
  ExternalLink 
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: initialService,
    budget: '',
    message: '',
    website: '', // Honeypot field
    consent: false,
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{ id?: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const servicesList = [
    t.services.items.webDev.title,
    t.services.items.webApps.title,
    t.services.items.telegramBots.title,
    t.services.items.pythonBackend.title,
    t.services.items.aiAssisted.title,
    t.services.items.maintenance.title,
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for field
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const validateClient = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.service) {
      errors.service = 'Please select a service category.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide project details (minimum 10 characters).';
    }
    if (!formData.consent) {
      errors.consent = 'Please confirm consent to proceed.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateClient()) {
      return;
    }

    setLoading(true);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000';
    const endpoint = `${apiBaseUrl.replace(/\/+$/, '')}/api/contact`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          service: formData.service,
          budget: formData.budget,
          message: formData.message.trim(),
          website: formData.website, // Honeypot
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorText =
          data?.message ||
          (data?.validation_errors ? Object.values(data.validation_errors)[0] : null) ||
          `Submission failed (${response.status}). Please try again or reach out on Telegram.`;
        throw new Error(errorText as string);
      }

      setSuccessResponse({
        id: data?.submission_id,
        message: data?.message || t.contact.form.successMsg,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        website: '',
        consent: false,
      });
    } catch (err: unknown) {
      const errStr = err instanceof Error ? err.message : 'Unable to connect to the backend server. Please verify your connection or message directly via Telegram.';
      setErrorMessage(errStr);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct channels and guidance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
                {t.contact.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-4">
                {t.contact.title}
              </h2>
              <p className="text-base text-graphite-600 leading-relaxed mb-8">
                {t.contact.subtitle}
              </p>

              {/* Direct Telegram & Social Blocks */}
              <div className="p-6 rounded-2xl bg-cobalt-50/60 border border-cobalt-200/80 mb-6">
                <p className="text-xs font-semibold text-cobalt-950 mb-3">
                  {t.contact.form.directNote}
                </p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://t.me/imceouz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-3 rounded-xl bg-white hover:bg-cobalt-100/50 border border-cobalt-200 text-cobalt-900 text-xs font-bold transition-colors shadow-2xs group"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-cobalt-700" />
                      <span>@imceouz ({t.contact.channels.telegramChannel})</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-cobalt-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://www.instagram.com/imceouz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-3 rounded-xl bg-white hover:bg-graphite-50 border border-graphite-200 text-graphite-900 text-xs font-bold transition-colors shadow-2xs group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span>@imceouz ({t.contact.channels.instagram})</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-graphite-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-graphite-500 pt-6 border-t border-graphite-150">
              <p className="leading-relaxed">
                We review inquiries directly. No automated marketing sequences or unprompted calls.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-graphite-50/70 rounded-3xl p-6 sm:p-10 border border-graphite-200/90 shadow-sm">
              {successResponse ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-graphite-900 mb-2">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-graphite-600 max-w-md mx-auto mb-6 leading-relaxed">
                    {successResponse.message}
                  </p>
                  {successResponse.id && (
                    <p className="text-xs font-mono bg-white inline-block px-3 py-1.5 rounded-lg border border-graphite-200 text-graphite-600 mb-6">
                      {t.contact.form.submissionRef} <span className="text-cobalt-700 font-bold">{successResponse.id}</span>
                    </p>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => setSuccessResponse(null)}
                      className="inline-flex items-center px-5 py-2.5 rounded-xl bg-cobalt-700 hover:bg-cobalt-800 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      {t.contact.form.anotherInquiry}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block mb-0.5">{t.contact.form.errorTitle}</span>
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  {/* Honeypot field - invisible to humans, catches bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website-hp">Website</label>
                    <input
                      type="text"
                      id="website-hp"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors ${
                          fieldErrors.name ? 'border-rose-400 bg-rose-50/20' : 'border-graphite-300'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors ${
                          fieldErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-graphite-300'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                        {t.contact.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-graphite-300 bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                        {t.contact.form.serviceLabel}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors ${
                          fieldErrors.service ? 'border-rose-400 bg-rose-50/20' : 'border-graphite-300'
                        }`}
                      >
                        <option value="">{t.contact.form.serviceSelect}</option>
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.service && (
                        <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                      {t.contact.form.budgetLabel}
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-graphite-300 bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors"
                    >
                      <option value="">{t.contact.form.budgetSelect}</option>
                      {t.contact.form.budgetRanges.map((rng) => (
                        <option key={rng} value={rng}>
                          {rng}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-graphite-700 mb-1.5">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-cobalt-600 transition-colors ${
                        fieldErrors.message ? 'border-rose-400 bg-rose-50/20' : 'border-graphite-300'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-0.5 rounded border-graphite-300 text-cobalt-700 focus:ring-cobalt-600"
                      />
                      <span className="text-xs text-graphite-600 leading-normal">
                        {t.contact.form.consentLabel}
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p className="text-[11px] text-rose-600 mt-1 pl-6">{fieldErrors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-cobalt-700 hover:bg-cobalt-800 disabled:opacity-70 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cobalt-600"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.contact.form.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.form.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
