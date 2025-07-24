---
title: Cycle 1
---
### Ohm's Law

A foundational principle in electronics. Understanding Ohm’s Law means understanding how voltage, current, resistance, and power interact—on paper and in practice.

You’ll need this to make design decisions, prevent component damage, and diagnose failures. It’s how you keep the smoke in.

### Goals

- Solve basic Ohm’s Law equations.
- Estimate safe current levels for common low DC voltages (5V, 12V, 3.3V).
- Estimate power levels in terms of safety concerns.
- Apply your knowledge to simple circuits.

#### Vocabulary
- voltage
- current
- power
- resistance
- AC/DC

#### Questions

- How many watts does it take to trip a household breaker?
- How many 'watts' is the light bulb you showed me? *There may be a few answers.*
- Are LEDs AC or DC?
- What are some other physical systems that act similarly to ohm's law?

#### Computer Poetry

⚡ Ohm’s Law: Not Just a Formula

In theory, it’s a triangle on a chalkboard.

In practice, it’s the reason your finger got burned.

In spirit, it’s a whisper in every wire: 

“You can only push so hard.”

Every circuit is a negotiation—

Voltage’s desire to move,

Resistance’s quiet refusal,

Current’s compromise.

### LED Theory

We’re focusing on 5mm through-hole LEDs, the kind most commonly found in hobby kits and basic electronics parts drawers.

These LEDs are easy to see, easy to handle, and easy to solder. They make circuit behavior visible and mistakes recoverable. You can press them into a breadboard, wire them up by hand, or mount them on a PCB with clear mechanical support.

We are deliberately excluding other LED formats—such as SMD packages, high-power COB arrays, or programmable RGB modules—for now. These devices introduce complications: tighter soldering tolerances, thermal management, specialized drivers, or hidden protocol layers.

By starting with the humble 5mm LED, you can focus on the fundamentals: voltage drop, current limiting, light color, and layout. These basics will apply to more advanced lighting systems later—but for now, we’re keeping it visible, physical, and simple.

- Explore common LED wavelengths and forward voltages
- Use [LED Calculator](https://ledcalculator.net/) to determine inline resistor values for single and multiple LEDs 

#### Vocabulary
- Current rating
- Forward voltage
- Resistor
- Wavelength
- PWM

#### Questions

- How many mA is a 5mm led?
- Why is the canonical LED circuit 330 ohms?
- What's the forward voltage of a white led?
- How many LEDs makes a watt?
- Can you find a datasheet for a common red LED?
- How does wavelength relate to kelvin?
- What's the wavelength of infrared?


### Circuit Design

The schematic is the language of intention. The PCB is its realization in copper and fiberglass.

To design a circuit is to think clearly about power, flow, and interaction. It demands both abstraction and attention to detail. Using tools like KiCad, we learn to express function as form: to map ideas into traces and footprints that can be manufactured, tested, and improved.

We are not just drawing diagrams—we are learning to shape behavior in matter.

This is the core of electronics: taking a concept (like “make this light turn on”) and translating it, step by step, into a physical object that works.

Our primary tooling is [KiCad]().

- It's free.
- It does everything. Well.
- It's easy to use.

Alternatives include [Fritzing]() and [Autodesk]().

#### Vocabulary
- Project
- Schematic
- PCB
- Symbol
- Footprint
- Track
- Layer
- Through-hole


- Create, save and load a project.
- Design a simple schematic.
  - Create symbols for LEDs and resistors
  - Use power symbols to represent power and ground.
  - Use wires to connect symbols, according to basic LED circuits
  - Modify the footprint of symbols. Search for 'LED_D5.0mm'
- Design a PCB
  - Update PCB from schematic
  - Ensure all symbols have footprints
  - Create edge cuts
  - Arrange components toward design goals
  - Connect components using tracks
  - Verify circuit with `Design Rules Checker`
- Export completed circuit 



#### Questions

- Compare SMD and through-hole. Why one or the other, in the context of your project?
- What does “clearance” mean in PCB design, and why does it matter?
- What's a via, and why would you need one?
- What happens if you don’t assign a footprint to a symbol?
- What does a rat’s nest mean in PCB layout?
- What are the limits of a two-layer board?
- Why is it important to define board edge cuts?


### Workflow

PCB and circuit design are deeply technical pursuits—but before we write code or simulate electrons, we must learn to move through the digital workshop.

At this stage, it’s less important to code and more important to:

-	Navigate files and folders confidently.
-	Use VSCode or another code editor to examine and edit project files.
-	Share, archive, and version-control designs properly.

#### Vocabulary

- Directory
- Git
- Zip
- Gerber

#### Goals

- Install VSCode
- Open a KiCad project using VSCode
- Examine the file structure of the project

#### Questions

- How would you share a KiCad project to:
  - A collaborator?
  - A manufacturer?
- How would you find your project files on a command line?
- Why would you want version control for a maker project?

## Assignment

### Specifications

- Have dimensions of 3.5x2 inchs
- Assume 12V power
- At least 2 RED LEDs
- At least 2 BLUE LEDs
- Use 5mm THT LED footprint
- Use 6.3mm THT resistor footprint 
- At least 1 M3 mounting hole
- Power and ground as both pad and hole, spaced on 0.1 inch grid.
- Silkscreen labels

### Submission
- Save your project folder
- Zip it for upload or sharing
- Include schematic, board layout, and Gerber files

### Questions

- Are your tracks wide enough? KiCad has tiny defaults.
- Can you get these parts at Lee's?

### Bonus

*Each of these is a rabbit hole. Choose wisely.*

- Replicate this design on a breadboard
- Scale up to a watt or more
- Try different or multiple wavelengths
- Make a spec sheet for your board
- Have fun with creative and informative PCB silkscreening
- Put things on the back of the board
- Get a quote for manufacturing from JLCPCB or PCBWay
- Make a 3D render of your board
- Change resistor values for a 5V power supply
- Document your design with a short readme: purpose, design choices, limitations.
