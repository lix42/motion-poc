# CLAUDE.md

Instructions for Claude Code when working on this project.

## Project Context

This is a **POC/playground** for exploring Motion and useGesture for web animations. The goal is experimentation, not production code. Feel free to try different approaches.

## Tech Stack

- **Motion** (v12) - the animation library (formerly Framer Motion)
- **@use-gesture/react** - gesture handling (drag, pinch, scroll, etc.)
- **React 19** with React Compiler enabled
- **Vite** via rolldown-vite

## Key Libraries

### Motion (v12)
```tsx
import { motion, useSpring, useTransform } from "motion/react"
```
- Use `motion.div` for animated elements
- `useSpring` for spring-based values
- `animate()` for imperative animations

### @use-gesture/react
```tsx
import { useDrag, useGesture } from "@use-gesture/react"
```
- `useDrag` for drag gestures
- `useGesture` for combining multiple gestures
- Bind to elements via spread: `{...bind()}`

## Current Focus

**Card merge interaction** - drag two cards together to merge them.

Key problems to solve:
- Draggable cards with smooth animations
- Overlap/collision detection
- Merge animation sequence
- State management for card data

## Guidelines

### Experimentation First
- This is a POC - try different approaches
- Compare alternatives (e.g., spring vs tween, different collision methods)
- Document what works and what doesn't

### Keep It Simple
- Minimal abstractions initially
- Inline styles or simple CSS are fine
- Focus on the interaction, not polish

### Motion + useGesture Integration
Common pattern:
```tsx
const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

const bind = useDrag(({ offset: [ox, oy] }) => {
  api.start({ x: ox, y: oy })
})

return <motion.div {...bind()} style={{ x, y }} />
```

### Documentation
- Always check latest Motion and useGesture docs
- Motion v12 has breaking changes from Framer Motion
- Use Context7 for up-to-date API references

## MCP Servers

- **motion** - Motion Studio MCP for up-to-date Motion docs and guidance

## Commands

```bash
pnpm dev      # Start dev server
pnpm build    # Build for production
pnpm lint     # Run ESLint
```

## Notes

- React Compiler is enabled - avoid patterns it can't optimize
- Using rolldown-vite for faster builds
- Touch and mouse input should both work
