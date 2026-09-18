

// // import { useState } from "react";
// // import "./Contact.css";

// // const EMAIL = "saliakbar790@gmail.com"; // Apna real email yahan likho
// // const LINKEDIN_URL = "https://www.linkedin.com/in/your-linkedin/"; // Apna LinkedIn URL
// // const WHATSAPP_NUMBER = "923286353383"; // Country code ke sath, + ke baghair

// // function ArrowIcon() {
// //   return (
// //     <span className="contact-arrow" aria-hidden="true">
// //       ↗
// //     </span>
// //   );
// // }

// // function ContactIcon({ children, className = "" }) {
// //   return (
// //     <span className={`contact-icon ${className}`} aria-hidden="true">
// //       {children}
// //     </span>
// //   );
// // }

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     service: "",
// //     message: "",
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setForm((previousForm) => ({
// //       ...previousForm,
// //       [name]: value,
// //     }));

// //     setSubmitted(false);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     const subject = encodeURIComponent(
// //       `Portfolio Contact — ${form.name}`
// //     );

// //     const body = encodeURIComponent(
// //       `Hi Ali,

// // Name: ${form.name}
// // Email: ${form.email}
// // Interested in: ${form.service || "Not specified"}

// // Message:
// // ${form.message}`
// //     );

// //     setSubmitted(true);

// //     window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
// //   };

// //   const whatsappMessage = encodeURIComponent(
// //     "Hi Ali! I found your portfolio and would like to discuss an opportunity."
// //   );

// //   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

// //   return (
// //     <section className="contact-section" id="contact">
// //       <div className="contact-orb contact-orb-one" aria-hidden="true" />
// //       <div className="contact-orb contact-orb-two" aria-hidden="true" />

// //       <div className="contact-container">
// //         {/* Section heading */}
// //         <header className="contact-heading">
// //           <span className="contact-eyebrow">
// //             <ContactIcon>✦</ContactIcon>
// //             LET'S CONNECT
// //           </span>

// //           <h2>
// //             Let's Build
// //             <span> Something Great.</span>
// //           </h2>

// //           <p>
// //             Have an idea, opportunity, or project in mind?
// //             Let's connect and turn it into something meaningful.
// //           </p>
// //         </header>

// //         {/* Availability */}
// //         <div className="contact-status">
// //           <span className="status-dot" />
// //           <span>Open to all opportunities</span>
// //           <span className="status-divider">•</span>
// //           <span>Jobs · Internships · Freelance · Collaborations</span>
// //         </div>

// //         {/* Main content */}
// //         <div className="contact-grid">
// //           {/* Contact information */}
// //           <div className="contact-info">
// //             <div className="contact-info-card">
// //               <span className="contact-card-label">GET IN TOUCH</span>

// //               <h3>
// //                 Let's start a
// //                 <br />
// //                 conversation.
// //               </h3>

// //               <p className="contact-description">
// //                 Whether you have a project, a job opportunity, or just want
// //                 to say hello — my inbox is open.
// //               </p>

// //               {/* Email */}
// //               <a className="contact-method" href={`mailto:${EMAIL}`}>
// //                 <ContactIcon className="contact-method-icon">
// //                   ✉
// //                 </ContactIcon>

// //                 <span className="contact-method-text">
// //                   <small>Email me</small>
// //                   <strong>{EMAIL}</strong>
// //                 </span>

// //                 <ArrowIcon />
// //               </a>

// //               {/* LinkedIn */}
// //               <a
// //                 className="contact-method"
// //                 href={LINKEDIN_URL}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 <ContactIcon className="contact-method-icon linkedin-icon">
// //                   in
// //                 </ContactIcon>

// //                 <span className="contact-method-text">
// //                   <small>Connect on LinkedIn</small>
// //                   <strong>Let's connect professionally</strong>
// //                 </span>

// //                 <ArrowIcon />
// //               </a>

// //               {/* WhatsApp */}
// //               <a
// //                 className="contact-method"
// //                 href={whatsappUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 <ContactIcon className="contact-method-icon whatsapp-icon">
// //                   ☎
// //                 </ContactIcon>

// //                 <span className="contact-method-text">
// //                   <small>WhatsApp</small>
// //                   <strong>0328 6353383</strong>
// //                 </span>

// //                 <ArrowIcon />
// //               </a>

// //               {/* Location and response time */}
// //               <div className="contact-meta">
// //                 <div>
// //                   <ContactIcon>⌖</ContactIcon>
// //                   <span>Pakistan · Open to Remote</span>
// //                 </div>

// //                 <div>
// //                   <ContactIcon>◷</ContactIcon>
// //                   <span>Usually replies within 24–48 hours</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Mini card */}
// //             <div className="contact-mini-card">
// //               <div className="mini-card-icon">✦</div>

// //               <div>
// //                 <strong>Got an interesting idea?</strong>
// //                 <p>I'd love to hear what you're working on.</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact form */}
// //           <div className="contact-form-card">
// //             <div className="form-topline">
// //               <div>
// //                 <span className="contact-card-label">SEND A MESSAGE</span>
// //                 <h3>Tell me about it.</h3>
// //               </div>

// //               <span className="form-sparkle" aria-hidden="true">
// //                 ➤
// //               </span>
// //             </div>

// //             <form onSubmit={handleSubmit}>
// //               <div className="form-row">
// //                 <div className="form-field">
// //                   <label htmlFor="contact-name">Your name</label>
// //                   <input
// //                     id="contact-name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="John Doe"
// //                     value={form.name}
// //                     onChange={handleChange}
// //                     autoComplete="name"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-field">
// //                   <label htmlFor="contact-email">Email address</label>
// //                   <input
// //                     id="contact-email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="john@example.com"
// //                     value={form.email}
// //                     onChange={handleChange}
// //                     autoComplete="email"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="form-field">
// //                 <label htmlFor="contact-service">
// //                   What are you looking for?
// //                 </label>

// //                 <select
// //                   id="contact-service"
// //                   name="service"
// //                   value={form.service}
// //                   onChange={handleChange}
// //                   required
// //                 >
// //                   <option value="" disabled>
// //                     Choose an opportunity
// //                   </option>
// //                   <option value="Full-time job">Full-time job</option>
// //                   <option value="Internship">Internship</option>
// //                   <option value="Freelance project">Freelance project</option>
// //                   <option value="Collaboration">Collaboration</option>
// //                   <option value="Other">Other</option>
// //                 </select>
// //               </div>

// //               <div className="form-field">
// //                 <label htmlFor="contact-message">Your message</label>

// //                 <textarea
// //                   id="contact-message"
// //                   name="message"
// //                   rows={5}
// //                   placeholder="Tell me a little about your project or opportunity..."
// //                   value={form.message}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>

// //               <button className="contact-submit" type="submit">
// //                 <span>Send Message</span>
// //                 <ArrowIcon />
// //               </button>

// //               {submitted && (
// //                 <p className="form-feedback" role="status">
// //                   <span aria-hidden="true">✓</span>
// //                   Your email app should open with your message.
// //                 </p>
// //               )}

// //               <p className="form-note">
// //                 This form opens your email app with the message pre-filled.
// //                 It does not send data to a server.
// //               </p>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Bottom call to action */}
// //         <div className="contact-bottom">
// //           <span>Have a great idea? Let's make it happen.</span>

// //           <a href={`mailto:${EMAIL}`}>
// //             Say hello
// //             <ArrowIcon />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



















// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const EMAIL = "saliakbar790@gmail.com";
// const LINKEDIN_URL = "https://www.linkedin.com/in/your-linkedin/";
// const WHATSAPP_NUMBER = "923286353383";

// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// function ArrowIcon() {
//   return (
//     <span className="contact-arrow" aria-hidden="true">
//       ↗
//     </span>
//   );
// }

// function ContactIcon({ children, className = "" }) {
//   return (
//     <span className={`contact-icon ${className}`} aria-hidden="true">
//       {children}
//     </span>
//   );
// }

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     type: "",
//     message: "",
//   });

//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setForm((previousForm) => ({
//       ...previousForm,
//       [name]: value,
//     }));

//     setStatus({
//       type: "",
//       message: "",
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
//       setStatus({
//         type: "error",
//         message:
//           "Email service is not configured. Please try again later.",
//       });
//       return;
//     }

//     setIsSending(true);
//     setStatus({
//       type: "",
//       message: "",
//     });

//     try {
//       await emailjs.send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         {
//           name: form.name,
//           email: form.email,
//           service: form.service,
//           message: form.message,
//           subject: `Portfolio Contact — ${form.name}`,
//           time: new Date().toLocaleString(),
//         },
//         {
//           publicKey: PUBLIC_KEY,
//         }
//       );

//       setStatus({
//         type: "success",
//         message: "Message sent successfully! Thanks for reaching out.",
//       });

//       setForm({
//         name: "",
//         email: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("EmailJS error:", error);

//       setStatus({
//         type: "error",
//         message:
//           "Message could not be sent. Please try again or contact me directly by email.",
//       });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   const whatsappMessage = encodeURIComponent(
//     "Hi Ali! I found your portfolio and would like to discuss an opportunity."
//   );

//   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-orb contact-orb-one" aria-hidden="true" />
//       <div className="contact-orb contact-orb-two" aria-hidden="true" />

//       <div className="contact-container">
//         {/* Section heading */}
//         <header className="contact-heading">
//           <span className="contact-eyebrow">
//             <ContactIcon>✦</ContactIcon>
//             LET'S CONNECT
//           </span>

//           <h2>
//             Let's Build
//             <span> Something Great.</span>
//           </h2>

//           <p>
//             Have an idea, opportunity, or project in mind?
//             Let's connect and turn it into something meaningful.
//           </p>
//         </header>

//         {/* Availability */}
//         <div className="contact-status">
//           <span className="status-dot" />
//           <span>Open to all opportunities</span>
//           <span className="status-divider">•</span>
//           <span>Jobs · Internships · Freelance · Collaborations</span>
//         </div>

//         {/* Main content */}
//         <div className="contact-grid">
//           {/* Contact information */}
//           <div className="contact-info">
//             <div className="contact-info-card">
//               <span className="contact-card-label">GET IN TOUCH</span>

//               <h3>
//                 Let's start a
//                 <br />
//                 conversation.
//               </h3>

//               <p className="contact-description">
//                 Whether you have a project, a job opportunity, or just want
//                 to say hello — my inbox is open.
//               </p>

//               {/* Email */}
//               <a
//                 className="contact-method"
//                 href={`mailto:${EMAIL}`}
//               >
//                 <ContactIcon className="contact-method-icon">
//                   ✉
//                 </ContactIcon>

//                 <span className="contact-method-text">
//                   <small>Email me</small>
//                   <strong>{EMAIL}</strong>
//                 </span>

//                 <ArrowIcon />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 className="contact-method"
//                 href={LINKEDIN_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <ContactIcon className="contact-method-icon linkedin-icon">
//                   in
//                 </ContactIcon>

//                 <span className="contact-method-text">
//                   <small>Connect on LinkedIn</small>
//                   <strong>Let's connect professionally</strong>
//                 </span>

//                 <ArrowIcon />
//               </a>

//               {/* WhatsApp */}
//               <a
//                 className="contact-method"
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <ContactIcon className="contact-method-icon whatsapp-icon">
//                   ☎
//                 </ContactIcon>

//                 <span className="contact-method-text">
//                   <small>WhatsApp</small>
//                   <strong>0328 6353383</strong>
//                 </span>

//                 <ArrowIcon />
//               </a>

//               {/* Location and response time */}
//               <div className="contact-meta">
//                 <div>
//                   <ContactIcon>⌖</ContactIcon>
//                   <span>Pakistan · Open to Remote</span>
//                 </div>

//                 <div>
//                   <ContactIcon>◷</ContactIcon>
//                   <span>Usually replies within 24–48 hours</span>
//                 </div>
//               </div>
//             </div>

//             {/* Mini card */}
//             <div className="contact-mini-card">
//               <div className="mini-card-icon">✦</div>

//               <div>
//                 <strong>Got an interesting idea?</strong>
//                 <p>I'd love to hear what you're working on.</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact form */}
//           <div className="contact-form-card">
//             <div className="form-topline">
//               <div>
//                 <span className="contact-card-label">SEND A MESSAGE</span>
//                 <h3>Tell me about it.</h3>
//               </div>

//               <span className="form-sparkle" aria-hidden="true">
//                 ➤
//               </span>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-field">
//                   <label htmlFor="contact-name">Your name</label>
//                   <input
//                     id="contact-name"
//                     name="name"
//                     type="text"
//                     placeholder="John Doe"
//                     value={form.name}
//                     onChange={handleChange}
//                     autoComplete="name"
//                     required
//                   />
//                 </div>

//                 <div className="form-field">
//                   <label htmlFor="contact-email">Email address</label>
//                   <input
//                     id="contact-email"
//                     name="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     autoComplete="email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-field">
//                 <label htmlFor="contact-service">
//                   What are you looking for?
//                 </label>

//                 <select
//                   id="contact-service"
//                   name="service"
//                   value={form.service}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Choose an opportunity
//                   </option>
//                   <option value="Full-time job">Full-time job</option>
//                   <option value="Internship">Internship</option>
//                   <option value="Freelance project">
//                     Freelance project
//                   </option>
//                   <option value="Collaboration">Collaboration</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="form-field">
//                 <label htmlFor="contact-message">Your message</label>

//                 <textarea
//                   id="contact-message"
//                   name="message"
//                   rows={5}
//                   placeholder="Tell me a little about your project or opportunity..."
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <button
//                 className="contact-submit"
//                 type="submit"
//                 disabled={isSending}
//               >
//                 <span>
//                   {isSending ? "Sending..." : "Send Message"}
//                 </span>

//                 {!isSending && <ArrowIcon />}
//               </button>

//               {status.message && (
//                 <p
//                   className={`form-feedback ${
//                     status.type === "error"
//                       ? "form-feedback-error"
//                       : "form-feedback-success"
//                   }`}
//                   role="status"
//                 >
//                   {status.message}
//                 </p>
//               )}

//               <p className="form-note">
//                 Your message will be sent securely through our email
//                 service. Please don't include sensitive information.
//               </p>
//             </form>
//           </div>
//         </div>

//         {/* Bottom call to action */}
//         <div className="contact-bottom">
//           <span>Have a great idea? Let's make it happen.</span>

//           <a href={`mailto:${EMAIL}`}>
//             Say hello
//             <ArrowIcon />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






















import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const EMAIL = "saliakbar790@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ali-akbar-shah-802661358/";
const WHATSAPP_NUMBER = "923286353383";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ArrowIcon() {
  return (
    <span className="contact-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function ContactIcon({ children, className = "" }) {
  return (
    <span className={`contact-icon ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please try again later.",
      });
      return;
    }

    setIsSending(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          subject: `Portfolio Contact — ${form.name}`,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! Thanks for reaching out.",
      });

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Message could not be sent. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Ali! I found your portfolio and would like to discuss an opportunity."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />

      <div className="contact-container">
        {/* Section heading */}
        <header className="contact-heading">
          <span className="contact-eyebrow">
            <ContactIcon>✦</ContactIcon>
            LET'S CONNECT
          </span>

          <h2>
            Let's Build
            <span> Something Great.</span>
          </h2>

          <p>
            Have an idea, opportunity, or project in mind?
            Let's connect and turn it into something meaningful.
          </p>
        </header>

        {/* Availability */}
        <div className="contact-status">
          <span className="status-dot" />
          <span>Open to all opportunities</span>
          <span className="status-divider">•</span>
          <span>Jobs · Internships · Freelance · Collaborations</span>
        </div>

        {/* Main content */}
        <div className="contact-grid">
          {/* Contact information */}
          <div className="contact-info">
            <div className="contact-info-card">
              <span className="contact-card-label">GET IN TOUCH</span>

              <h3>
                Let's start a
                <br />
                conversation.
              </h3>

              <p className="contact-description">
                Whether you have a project, a job opportunity, or just want
                to say hello — my inbox is open.
              </p>

              {/* Email */}
              <a
                className="contact-method"
                href={`mailto:${EMAIL}`}
              >
                <ContactIcon className="contact-method-icon">
                  ✉
                </ContactIcon>

                <span className="contact-method-text">
                  <small>Email me</small>
                  <strong>{EMAIL}</strong>
                </span>

                <ArrowIcon />
              </a>

              {/* LinkedIn */}
              <a
                className="contact-method"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactIcon className="contact-method-icon linkedin-icon">
                  in
                </ContactIcon>

                <span className="contact-method-text">
                  <small>Connect on LinkedIn</small>
                  <strong>Let's connect professionally</strong>
                </span>

                <ArrowIcon />
              </a>

              {/* WhatsApp */}
              <a
                className="contact-method"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactIcon className="contact-method-icon whatsapp-icon">
                  ☎
                </ContactIcon>

                <span className="contact-method-text">
                  <small>WhatsApp</small>
                  <strong>0328 6353383</strong>
                </span>

                <ArrowIcon />
              </a>

              {/* Location and response time */}
              <div className="contact-meta">
                <div>
                  <ContactIcon>⌖</ContactIcon>
                  <span>Pakistan · Open to Remote</span>
                </div>

                <div>
                  <ContactIcon>◷</ContactIcon>
                  <span>Usually replies within 24–48 hours</span>
                </div>
              </div>
            </div>

            {/* Mini card */}
            <div className="contact-mini-card">
              <div className="mini-card-icon">✦</div>

              <div>
                <strong>Got an interesting idea?</strong>
                <p>I'd love to hear what you're working on.</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-card">
            <div className="form-topline">
              <div>
                <span className="contact-card-label">SEND A MESSAGE</span>
                <h3>Tell me about it.</h3>
              </div>

              <span className="form-sparkle" aria-hidden="true">
                ➤
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-service">
                  What are you looking for?
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose an opportunity
                  </option>
                  <option value="Full-time job">Full-time job</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance project">
                    Freelance project
                  </option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Your message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="contact-submit"
                type="submit"
                disabled={isSending}
              >
                <span>
                  {isSending ? "Sending..." : "Send Message"}
                </span>

                {!isSending && <ArrowIcon />}
              </button>

              {status.message && (
                <p
                  className={`form-feedback ${
                    status.type === "error"
                      ? "form-feedback-error"
                      : "form-feedback-success"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}

              <p className="form-note">
                Your message will be sent through EmailJS. Please don't
                include sensitive information.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom call to action */}
        <div className="contact-bottom">
          <span>Have a great idea? Let's make it happen.</span>

          <a href={`mailto:${EMAIL}`}>
            Say hello
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}