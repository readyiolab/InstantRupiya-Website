<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared website navigation and footer live in SiteShell around the root Outlet so every page uses the same navigation.
- Each public destination has a dedicated file route with its own metadata; reusable page framing and the calculator live outside route modules.
- All application links use APPLICATION_URL from the shared site configuration so the destination stays consistent.
- Shared page enrichment selects contextual photography and topic interactions by page title; business disclosures remain explicit when verified company details are unavailable.
- Motion uses CSS transitions and intersection-triggered reveals with a prefers-reduced-motion override, keeping content readable without animation.
- Shared navigation uses a scroll-state class with requestAnimationFrame updates; typed supporting text owns its timer and reduced-motion listener so both clean up on navigation.
- Mobile navigation uses the shared Radix Sheet in a full-viewport portal for focus trapping, scroll locking and left-slide entry/exit; it closes on navigation or desktop resize.
- Shared application next steps render inside SiteShell for every content page; preparation has a dedicated route and uses a same-origin streaming AI endpoint with validated opt-in inputs, no borrower persistence, and service-only persistent access-block state.
- Repayment estimates use the shared pure reducing-balance calculation, supporting zero interest and unrounded totals; displayed estimates exclude lender fees and rounding.
