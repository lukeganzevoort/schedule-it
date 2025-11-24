# **schedule‑it – Project Context Overview**

### Purpose

Create a lightweight, open‑source web service that lets organizations generate conflict‑free schedules. Typical users are:

- **Recreational sports leagues** – assigning games to fields, teams, and referees.
- **Healthcare facilities** – planning nurse or caregiver shifts across wards.
- **Small schools or clubs** – arranging practice sessions, meetings, or events.

The app demonstrates that a solo developer can deliver a full‑stack MEAN solution, from a modern Angular UI down to a MongoDB data layer, while handling real‑world constraints like resource availability and role‑based permissions.

### Business Value

**Time savings**

Automates a task usually done manually in spreadsheets, reducing scheduling errors and administrative overhead.

**Transparency**

Everyone can view their own calendar and see why a particular slot was chosen, improving trust among participants.

**Scalability**

Built on the MEAN stack, the service can grow from a single league to multiple independent tenants without major rewrites.

### Core Scope (high‑level)

1.  **Multi‑tenant architecture** – each league or facility operates in isolation under a single application instance.
2.  **Role‑based access** – admins manage resources and users; schedulers create/adjust events; viewers only read calendars.
3.  **Calendar UI** – interactive view where users can drag, drop, and edit events.
4.  **Conflict detection** – backend validates that no two events occupy the same resource or participant at the same time.
5.  **Automatic schedule generation** – a simple algorithm that distributes events across available slots, demonstrating problem‑solving beyond CRUD.
6.  **Export options** – CSV or iCal files so users can import schedules into personal calendars or reporting tools.

### High‑Level Technology Stack

| Layer     | Technology (latest)                                 | Rationale                                                                                                     |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Front‑end | **Angular 21** + Angular Material + FullCalendar.io | Modern, component‑driven UI with built‑in accessibility and responsive design.                                |
| API       | **Node.js** (v20) + **Express**                     | Minimalist server framework that pairs naturally with Angular’s TypeScript ecosystem.                         |
| Auth      | **JWT** (stateless)                                 | Scales easily across containers and simplifies front‑end token handling.                                      |
| Database  | **MongoDB Atlas** (cloud)                           | Schemaless documents fit well for events with varying recurrence rules; managed service removes ops overhead. |
| DevOps    | **Docker Compose** + **GitHub Actions**             | Guarantees reproducible builds and continuous integration for a professional portfolio.                       |

### Success Indicators

- A functional demo site where a user can register, create resources, add events, and run the auto‑scheduler.
- Clean, well‑documented source code with a concise README that explains setup, architecture, and usage.
- Positive feedback from peers or recruiters that the project showcases end‑to‑end MEAN expertise.

### Why This Context Matters

Framing _schedule‑it_ around real scheduling problems (sports leagues, nurse shifts) makes the project feel purposeful. It aligns with common industry needs—resource allocation, conflict resolution, and multi‑tenant SaaS design—making the repository a compelling talking point during interviews or client pitches.
