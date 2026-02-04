# Motion + useGesture POC

A proof-of-concept project evaluating **Motion** (Framer Motion v12) and **@use-gesture/react** for web-based game animations and interactions.

## Goals

1. **Evaluate Motion + useGesture** for web animation workflows
2. **Assess tech stack suitability** for simple browser games
3. **First milestone**: Drag two cards to merge them (2048-style interaction)
4. **Experiment freely** with different animation and gesture patterns

## Tech Stack

- **React 19** with React Compiler
- **Motion** (v12) - animation library
- **@use-gesture/react** - gesture handling
- **Vite** (rolldown-vite) - fast dev/build
- **TypeScript**

## Getting Started

```bash
pnpm install
pnpm dev
```

## Current Focus

Card merge interaction:
- Drag cards freely on a canvas
- Detect when two cards overlap
- Merge animation when cards combine
- Spawn new merged card

## Experiments to Try

- Spring physics vs tween animations
- Gesture velocity for throw effects
- Collision detection approaches
- State management for game logic
- Touch vs mouse input handling

## Status

Early POC - exploring possibilities.
