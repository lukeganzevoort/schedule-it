# **schedule‑it‑rec‑leagues – Project Context Overview**

### Purpose

Create a lightweight, open‑source web service that helps recreational sports leagues generate conflict‑free game schedules. The application streamlines the process of assigning games to fields, teams, and referees while ensuring fair play time distribution and handling complex scheduling constraints.

The app demonstrates that a solo developer can deliver a full‑stack MEAN solution, from a modern Angular UI down to a MongoDB data layer, while solving real‑world challenges like field availability, referee assignments, team preferences, and multi‑league coordination.

### Business Value

**Time savings**

Automates a task usually done manually in spreadsheets, reducing scheduling errors and administrative overhead.

**Transparency**

Everyone can view their own calendar and see why a particular slot was chosen, improving trust among participants.

**Scalability**

Built on the MEAN stack, the service can grow from a single league to multiple independent tenants without major rewrites.

### Core Scope (high‑level)

1.  **Multi‑tenant architecture** – each recreational sports league operates in isolation under a single application instance.
2.  **Role‑based access** – league admins manage fields, teams, and referees; schedulers create/adjust games; coaches and players view their team calendars.
3.  **Calendar UI** – interactive view where users can drag, drop, and edit games with field and time slot visualization.
4.  **Conflict detection** – backend validates that no two games occupy the same field at the same time, and ensures teams/referees aren't double‑booked.
5.  **Automatic schedule generation** – an algorithm that distributes games fairly across available fields and time slots, balancing home/away games and avoiding back‑to‑back scheduling.
6.  **Export options** – CSV or iCal files so coaches and players can import game schedules into personal calendars or team communication tools.

### High‑Level Technology Stack

| Layer     | Technology (latest)                                 | Rationale                                                                                                     |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Front‑end | **Angular 21** + Angular Material + FullCalendar.io | Modern, component‑driven UI with built‑in accessibility and responsive design.                                |
| API       | **Node.js** (v20) + **Express**                     | Minimalist server framework that pairs naturally with Angular’s TypeScript ecosystem.                         |
| Auth      | **JWT** (stateless)                                 | Scales easily across containers and simplifies front‑end token handling.                                      |
| Database  | **MongoDB Atlas** (cloud)                           | Schemaless documents fit well for events with varying recurrence rules; managed service removes ops overhead. |
| DevOps    | **Docker Compose** + **GitHub Actions**             | Guarantees reproducible builds and continuous integration for a professional portfolio.                       |

### Success Indicators

- A functional demo site where a league admin can register, set up fields and teams, assign referees, and generate a full season schedule with the auto‑scheduler.
- Clean, well‑documented source code with a concise README that explains setup, architecture, and usage.
- Positive feedback from peers or recruiters that the project showcases end‑to‑end MEAN expertise and practical problem‑solving for sports league management.

### Why This Context Matters

Framing _schedule‑it‑rec‑leagues_ around recreational sports league scheduling makes the project immediately relatable and purposeful. Sports scheduling involves complex constraints—field availability, team fairness, referee assignments, and travel considerations—that demonstrate real problem‑solving skills. The solution showcases resource allocation, conflict resolution, and multi‑tenant SaaS design patterns that translate to many other domains, making the repository a compelling talking point during interviews or client pitches.
