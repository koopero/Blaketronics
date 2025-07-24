---
title: Cycle 1
---

This first cycle is designed to ground the student in the essential concepts, tools, and workflows required to begin designing and building their own lighting systems. The focus is not on covering theory exhaustively, but on building fluency with practical fundamentals: understanding how voltage, current, resistance, and power interact; how LEDs behave and must be driven; and how to translate schematic intent into a manufacturable PCB using modern tools.

The process follows a sequence:
1.	**Ohm’s Law** introduces the core relationships that govern all electrical behavior. These are the rules that keep your components alive—or cause them to fail.
2.	**LED Theory** builds an intuitive and quantitative understanding of light-emitting diodes, including their electrical requirements and their physical characteristics.
3.	**Circuit Design** uses KiCad to represent ideas as schematics, then translate those into PCB layouts ready for manufacture or assembly.
4.	**Workflow** introduces basic digital project hygiene: how to manage, examine, and share your design files effectively.

The cycle culminates in a complete assignment: the design of a small, manufacturable PCB that drives multiple LEDs from a 12V supply. Successful completion demonstrates integration of theory and practice, with an eye toward future, more complex lighting systems.

## Ohm's Law

A foundational principle in electronics. Understanding Ohm’s Law means understanding how voltage, current, resistance, and power interact—on paper and in practice.

You’ll need this to make design decisions, prevent component damage, and diagnose failures. It’s how you keep the smoke in.

### Vocabulary
- voltage
- current
- power
- resistance
- AC/DC

### Goals

- Solve basic Ohm’s Law equations.
- Estimate safe current levels for common low DC voltages (5V, 12V, 3.3V).
- Estimate power thresholds where heat, failure, fire, or injury become concerns
- Apply your knowledge to simple circuits.
- Use a multimeter to measure voltage and current in a simple, 5V breadboard circuit.

### Questions

- How many watts does it take to trip a household breaker?
- Are LEDs AC or DC?
- What are some other physical systems that behave like Ohm’s law?
- Where would you need to measure millivolts? Kilovolts? 
- How much current can you measure with a multimeter?
- How many 'watts' is the light bulb you showed me? *There may be a few answers in different domains.*


### Computer Poetry

**⚡ Ohm’s Law: Not Just a Formula**

```
In theory, it’s a triangle on a chalkboard.
In practice, it’s the reason your finger got burned.
In spirit, it’s a whisper in every wire: 
“You can only push so hard.”

Every circuit is a negotiation—
Voltage’s desire to move,
Resistance’s quiet refusal,
Current’s compromise.
```

## LED Theory

We’re focusing on 5mm through-hole LEDs, the kind most commonly found in hobby kits and basic electronics parts drawers.

These LEDs are easy to see, easy to handle, and easy to solder. They make circuit behavior visible and mistakes recoverable. You can press them into a breadboard, wire them up by hand, or mount them on a PCB with clear mechanical support.

We are deliberately excluding other LED formats—such as SMD packages, high-power COB arrays, or programmable RGB modules—for now. These devices introduce complications: tighter soldering tolerances, thermal management, specialized drivers, or hidden protocol layers.

By starting with the humble 5mm LED, you can focus on the fundamentals: voltage drop, current limiting, light color, and layout. These basics will apply to more advanced lighting systems later—but for now, we’re keeping it visible, physical, and simple.

### Vocabulary
- Forward voltage
- Current rating
- Current limiting resistor
- Wavelength


### Goals

- Explore common LED wavelengths and forward voltages.
- Use [LED Calculator](https://ledcalculator.net/) to determine inline resistor values for single and multiple LEDs.

### Questions

- How many mA is a 5mm led?
- Why is the canonical LED circuit 330 ohms?
- What's the forward voltage of a white led?
- How many LEDs can you power with one watt?
- Can you find a datasheet for a common red LED?
- How does wavelength relate to kelvin?
- What's the wavelength of infrared?

## Circuit Design

The schematic is the language of intention. The PCB is its realization in copper and fiberglass.

To design a circuit is to think clearly about power, flow, and interaction. It demands both abstraction and attention to detail. Using tools like KiCad, we learn to express function as form: to map ideas into traces and footprints that can be manufactured, tested, and improved.

We are not just drawing diagrams—we are learning to shape behavior in matter.

This is the core of electronics: taking a concept (like “make this light turn on”) and translating it, step by step, into a physical object that works.

We use [KiCad]() for all stages:

- Free and open-source
- Full-featured and powerful
- Reasonably beginner-friendly

### Vocabulary
- Project
- Schematic
- Symbol
- Footprint
- PCB
- Track
- Layer
- Through-hole

### Goals

- Create, save and reopen a project.
- Design a schematic:
  - Place LED and resistor symbols.
  - Use power symbols for VCC and GND.
  - Wire the circuit logically.
  - Assign and modify appropriate footprints.
- Design a PCB:
  - Sync schematic to layout.
  - Place components logically.
  - Define board edges.
  - Route tracks.
  - Run Design Rules Checker.
- Export Gerbers and layout files.
- Export schematic as printable PDF

### Questions

- Compare SMD and through-hole. Why one or the other, in the context of your project?
- What does “clearance” mean in PCB design, and why does it matter?
- What's a via, and why use one?
- What happens if you skip assigning a footprint?
- What is a rat’s nest?
- What are the limits of a two-layer board?
- Why are edge cuts required?


## Workflow

PCB and circuit design are deeply technical pursuits—but before we write code or simulate electrons, we must learn to move through the digital workshop.

At this stage, focus on file literacy and project hygiene:

- Navigate and organize project folders using your file manager or terminal.
- Use a text/code editor like VSCode to inspect files.
- Share and archive your work correctly.

### Vocabulary

- Directory
- Git
- Zip
- Gerber
- File extension

### Goals

- Install VSCode
- Open a KiCad project using VSCode
- Examine the file structure of the project
- Identify files by extension and type  (e.g., .kicad_sch, .kicad_pcb, .zip)

### Questions

- How would you share a KiCad project with:
  - A collaborator?
  - A manufacturer?
- How would you find your project files on a terminal?
- Why would you want version control for a maker project?

## Assignment

To demonstrate integration of theory and practice, design a prototype PCB.

### Specifications

- Have dimensions of 3.5"x2"
- Assume 12V power
- At least 2 RED LEDs
- At least 2 BLUE LEDs
- Use 5mm THT LED footprint
- Use 6.3mm THT resistor footprint 
- At least 1 M3 mounting hole
- Include both pad and hole for power and ground connections, spaced on a 0.1” grid to support header pin or screw terminal connections.
- Silkscreen labels for project name, power connectors and component placement and values.

### Submission
- Save your project folder
- Zip it for upload or sharing, or push to a Github repo
- Include schematic, board layout, and Gerber files

### Questions

- Are your tracks wide enough? KiCad defaults are often too small.
- Can you buy these parts at Lee's?
- Are you using metric or imperial?

### Bonus

Each bonus is a tangent worth exploring.

- Build the circuit on a breadboard
- Redesign for 5V input
- Scale up to a watt or more
- Try different LED colors or combine them
- Create a spec sheet for your design
- Use silkscreen creatively (labels, art, jokes)
- Put components and labels on both sides of the board
- Get a quote for manufacturing from JLCPCB or PCBWay
- Make a 3D render of your board
- Document your design with a short readme: purpose, design choices, limitations.
