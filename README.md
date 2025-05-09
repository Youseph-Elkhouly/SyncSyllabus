# 📚 SyncSyllabus – 

SyncSyllabus is a full stack web app that allows students to upload course outlines (PDF/DOCX), automatically extract key academic dates (assignments, midterms, projects), and sync them directly to their Notion calendar using AI-powered parsing and automation.

🎨 **Figma Design**: [View UI Mockups](https://www.figma.com/design/ylZPPGgcB1Jb6LECXjfQ3x/SYNCSYLLABUS?node-id=0-1&p=f&t=zNoTkC87Axb0UCDJ-0)

---

## ⚙️ Tech Stack

| Layer      | Technology                                                                 |
|------------|------------------------------------------------------------------------------|
| Frontend   | Next.js (React), Tailwind CSS, React Router, Vite                          |
| Backend    | FastAPI (Python), pdfplumber, python-docx, spaCy, dateparser, Notion API   |
| Deployment | Railway / Render                                                            |
| Extras     | Figma for design, Local State for state management                         |

---

## 🚀 Features

- Upload course outlines (.pdf / .docx / .txt)
- Automatically extract assignment & exam dates using NLP
- Review and confirm detected events
- Sync confirmed events to your personal Notion calendar
- Clean dark-mode UI for smooth user experience

---

## 🛠️ Installation

### 🔄 Clone the Repository
```bash
git clone https://github.com/Youseph-Elkhouly/SyncSyllabus.git
cd SyncSyllabus
