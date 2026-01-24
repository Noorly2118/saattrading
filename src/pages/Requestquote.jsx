import { useState } from "react";
import axios from "axios";
import {
  User,
  Building2,
  Phone,
  MapPin,
  Hash,
  Package,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
  Upload,
} from "lucide-react";

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    tin: "",
    siteLocation: "",
    telegram: "",
    phone: "",
    materials: "",
    message: "",
    attachments: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, attachments: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key !== "attachments") {
        formData.append(key, value || "");
      }
    });

    if (form.attachments) {
      for (let i = 0; i < form.attachments.length; i++) {
        formData.append("attachments", form.attachments[i]);
      }
    }

    try {
      await axios.post("http://localhost:5000/api/quote", formData);

      setStatus("success");
      setForm({
        name: "",
        company: "",
        tin: "",
        siteLocation: "",
        telegram: "",
        phone: "",
        materials: "",
        message: "",
        attachments: null,
      });

      const fileInput = document.getElementById("file-input");
      if (fileInput) fileInput.value = "";

      setTimeout(() => setStatus(""), 6000);
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus(""), 8000);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .quote-page {
              padding: 8rem 0;
              background: linear-gradient(to bottom, #f5f7f8 0%, #e9ecef 100%);
              position: relative;
              overflow: hidden;
            }
            .quote-page::before {
              content: "";
              position: absolute;
              top: 0; left: 0; width: 100%; height: 100%;
              background: radial-gradient(circle at 90% 20%, rgba(15, 92, 92, 0.08) 0%, transparent 50%);
              pointer-events: none; z-index: 0;
            }
            .container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
            .quote-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 6rem; align-items: start; }
            .quote-info h1 { font-size: 3.4rem; font-weight: 900; margin-bottom: 1.5rem; line-height: 1.2; color: #0F5C5C; }
            .quote-info p { font-size: 1.2rem; color: #495057; margin-bottom: 2.5rem; max-width: 560px; line-height: 1.7; }
            .benefits { list-style: none; padding: 0; margin: 0; }
            .benefits li { font-weight: 700; font-size: 1.15rem; margin-bottom: 1.2rem; color: #0F5C5C; display: flex; align-items: center; gap: 1rem; }
            .benefits li svg { color: #F28C28; flex-shrink: 0; }
            .quote-form-card { background: #ffffff; border-radius: 28px; padding: 4rem 3.5rem; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12); border-left: 8px solid #0F5C5C; position: relative; }
            .quote-form-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 8px; background: linear-gradient(90deg, #F28C28, #f28c28cc); border-radius: 28px 28px 0 0; }
            .quote-form-card h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 2.8rem; color: #2B2B2B; position: relative; }
            .quote-form-card h2::after { content: ""; position: absolute; bottom: -14px; left: 0; width: 80px; height: 5px; background: #F28C28; border-radius: 3px; }
            .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
            .form-group { position: relative; }
            .form-group label { font-weight: 700; color: #0F5C5C; margin-bottom: 0.6rem; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; }
            .form-group input, .form-group textarea { width: 100%; padding: 1.1rem 1.3rem 1.1rem 3rem; border: 2px solid #e0e0e0; border-radius: 14px; font-size: 1rem; transition: all 0.3s ease; background: #fdfdfd; }
            .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #F28C28; background: #ffffff; box-shadow: 0 0 0 5px rgba(242, 140, 40, 0.2); }
            .form-group textarea { min-height: 200px; resize: vertical; }
            .icon { position: absolute; left: 1rem; top: 3.1rem; color: #9AA6A6; pointer-events: none; width: 20px; height: 20px; }
            .textarea-icon { top: 3.2rem; }
            .file-upload { position: relative; padding: 1.5rem; border: 2px dashed #9AA6A6; border-radius: 14px; text-align: center; background: #f9fafa; transition: all 0.3s ease; cursor: pointer; }
            .file-upload:hover { border-color: #F28C28; background: #fff9f0; }
            .file-upload input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
            .submit-btn { background: linear-gradient(135deg, #F28C28 0%, #ff9f00 100%); color: white; padding: 1.3rem 3.5rem; border: none; border-radius: 60px; font-weight: 800; font-size: 1.15rem; cursor: pointer; box-shadow: 0 12px 35px rgba(242, 140, 40, 0.4); transition: all 0.4s ease; margin-top: 2rem; display: flex; align-items: center; gap: 12px; }
            .submit-btn:hover:not(:disabled) { transform: translateY(-5px) scale(1.03); box-shadow: 0 20px 50px rgba(242, 140, 40, 0.5); }
            .submit-btn:disabled { opacity: 0.7; transform: none; cursor: not-allowed; }
            .status-message { margin-top: 2rem; padding: 1.2rem 1.8rem; border-radius: 14px; font-weight: 700; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; }
            .success { background: rgba(0, 180, 0, 0.12); color: #006400; border: 1px solid #008000; }
            .error { background: rgba(220, 53, 69, 0.12); color: #c0392b; border: 1px solid #dc3545; }
            .trust-note { text-align: center; color: #9AA6A6; font-size: 0.95rem; margin-top: 4rem; }
            @media (max-width: 992px) { .quote-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; } }
            @media (max-width: 576px) { .quote-page { padding: 6rem 0; } .quote-info h1 { font-size: 2.8rem; } .quote-form-card { padding: 3rem 2rem; } .form-grid { grid-template-columns: 1fr; } .submit-btn { width: 100%; justify-content: center; } }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .animate-spin { animation: spin 1s linear infinite; }
          `,
        }}
      />

      <section className="quote-page">
        <div className="container">
          <div className="quote-grid">
            <div className="quote-info">
              <h1>SAAT – Request Material Quote</h1>
              <p>
                Submit your rebar, binding wire, and nail requirements. Get fast, accurate pricing with delivery options across Ethiopia.
              </p>
              <ul className="benefits">
                <li><CheckCircle size={26} /> Competitive bulk pricing</li>
                <li><CheckCircle size={26} /> Response within hours</li>
                <li><CheckCircle size={26} /> Nationwide delivery coordination</li>
                <li><CheckCircle size={26} /> Expert material consultation</li>
              </ul>
            </div>

            <div className="quote-form-card">
              <h2>Submit Your Request</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label><User size={18} /> Full Name *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Abebe Kebede" />
                    <User className="icon" />
                  </div>

                  <div className="form-group">
                    <label><Building2 size={18} /> Company Name</label>
                    <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Kebede Construction PLC" />
                    <Building2 className="icon" />
                  </div>

                  <div className="form-group">
                    <label><Hash size={18} /> TIN Number *</label>
                    <input name="tin" type="text" required value={form.tin} onChange={handleChange} placeholder="ET1234567890" />
                    <Hash className="icon" />
                  </div>

                  <div className="form-group">
                    <label><MapPin size={18} /> Site Location *</label>
                    <input name="siteLocation" type="text" required value={form.siteLocation} onChange={handleChange} placeholder="Bole, Addis Ababa (near EDC)" />
                    <MapPin className="icon" />
                  </div>

                  <div className="form-group">
                    <label><User size={18} /> Telegram Username (optional)</label>
                    <input name="telegram" type="text" value={form.telegram} onChange={handleChange} placeholder="@yourusername" />
                    <User className="icon" />
                  </div>

                  <div className="form-group">
                    <label><Phone size={18} /> Phone Number *</label>
                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+251 911 234 567" />
                    <Phone className="icon" />
                  </div>

                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label><Package size={18} /> Materials Request *</label>
                    <textarea
                      name="materials"
                      required
                      value={form.materials}
                      onChange={handleChange}
                      placeholder={`Example format:

A) Total Sum of Sub & Super Structures
1) dia 6mm bar = 7245kg
2) dia 8mm bar = 271kg   (59 berga)
3) dia 10mm bar = 2700kg   (356 berga)
4) dia 12mm bar = 11545kg   (1085 berga)
5) dia 14mm bar = 480kg   (34 berga)
6) dia 16mm bar = 170kg   (11 berga)
7) 1.5mm black wire = 150kg
8) 2.5mm black wire = 150kg
9) Nails 5mm-12mm = 150 packets`}
                    />
                    <Package className="icon textarea-icon" />
                  </div>

                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label><MessageSquare size={18} /> Additional Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Delivery deadline, special requirements, transport needed, etc."
                    />
                    <MessageSquare className="icon textarea-icon" />
                  </div>

                  <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                    <label>Attach Drawings / BOQ (PDF, Excel, images)</label>
                    <div className="file-upload">
                      <input id="file-input" type="file" multiple accept=".pdf,.xlsx,.xls,.jpg,.jpeg,.png" onChange={handleFileChange} />
                      <Upload size={32} style={{ color: "#9AA6A6", marginBottom: "8px" }} />
                      <p style={{ margin: 0, color: "#666" }}>Click or drag files here</p>
                      <small style={{ color: "#9AA6A6" }}>Multiple files supported</small>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <> <Loader2 className="animate-spin" size={22} /> Sending... </>
                  ) : (
                    "Submit Request"
                  )}
                </button>

                {status === "success" && (
                  <div className="status-message success">
                    <CheckCircle size={26} />
                    Request sent successfully! We'll contact you shortly via phone or Telegram.
                  </div>
                )}

                {status === "error" && (
                  <div className="status-message error">
                    <AlertCircle size={26} />
                    Failed to send. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          <p className="trust-note">
            Your information is secure and used only for providing accurate quotes.
          </p>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;
