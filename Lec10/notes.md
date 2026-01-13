# Feature Based vs Atomic Design

#                                             1. Atomic Design
# Based on Brad Frost's methodology, this structure organizes components by complexity and responsibility rather than what they do. It treats your UI like a chemistry lab.
# The Hierarchy:
# Atoms: The smallest building blocks (e.g., a Button, Input, or Label). They cannot be broken down further.
# Molecules: Groups of atoms bonded together (e.g., a SearchBar molecule made of an input atom and a button atom).
# Organisms: Complex UI sections (e.g., a Header or a ProductGrid).
# Templates: Page-level layouts that define where organisms sit.
# Pages: Specific instances where real data is injected into templates.
# Pros: Encourages massive reusability and a very consistent Design System. Cons: Can feel "over-engineered" for    small teams. It’s often hard to decide if a component is a molecule or an organism.

#                                               2. Feature-based Structure
# This structure organizes files by what they belong to in the app (the domain). Everything related to "Authentication" or "Profile" lives in one place.
# The Hierarchy:
# src/features/auth: Contains LoginForm.js, useAuth.js, authSlice.ts, and AuthButton.js.
# src/features/shopping-cart: Contains CartItem.js, cartService.js, and CartSummary.js.
# src/components: Only contains truly global components (like a generic Navbar).
# Pros: Extremely scalable. If you need to delete the "Chat" feature, you just delete the chat folder. It keeps developers focused on one business goal at a time. Cons: Can lead to code duplication if you aren't careful about moving shared logic into a common or shared folder.