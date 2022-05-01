# Homework Week 2

## Team Name: Have you tried restarting?
## Web Application Name: PackedIt

## Team members:
- Eilidh Quinn
- Gracialine Ong
- Laura Almond
- Michelle Kim

## Wireframe of PackedIt
Wireframes to be added here. 

## d) Justification of design choice
Buttons at the very right as it is a stopping point in the Z pattern. 
The main function, creating a list is in the centre of the screen so it is easily seen.

## e) Justification of colour choice
Used Skyscanner colours 

## f) Design heuristics
Design principle in bold (numbered).  Description in italics.  We can remove the stuff in italics once we have finished this section. 

### Normal Design Principles/Heuristics

#### 1. **Use both the knowledge in the world and in the head:** 
*Make use of what the user already knows to reduce their mental load!
Make it natural! We’ll explore this later, but think something like language; english readers scan left to right, but arabic readers may scan right to left instead (the language is right-to-left instead!)*


#### 2. **Simplify the structure of the task:** 
*Ensure that the structure is simple - for example, cut down on the number of steps something may have.*
 - Steps to create a list is minimal. We have included suggested categories to reduce the users input.

#### 3. **Make things visible:** 
*Ensure that components or function that a user will need is visible - otherwise, the user has to spend time looking (annoying) and may not know what to do next.  But make visible only the stuff that matters. For example, on a log-in screen, we only need logging components - anything else is just clutter!*
 - The list page will have the categories listed on the left hand side no matter where they are in the list.  This makes them easy to find. 

#### 4. **Get the mappings right:** 
*Ensure that the effect a component has matches its control (e.g. how a left arrow represents usually movement for going back, a button should similarly match this level of direct mapping)*

#### 5. **Exploit the power of constraints, both natural and artificial:** 
*Place constraints and arrange components in a way that the user is naturally is guided to them themselves - they don’t have to remember where the back button is this way 
For example like how most back buttons are usually located on the top-left of the screen / associated with left (e.g. iOS, swipe left for back. Most back movements have a left-directed button)*

#### 6. **Design for error:** 
*Assume that users will make an error at some point, and plan accordingly*
- we allow the user to edit or delete an entry or a category.

#### 7. **When all else fails, standardise:** 
*Use standard icons, or follow other standard conventions*
- we have used standard icons for adding to an item (plus symbol), deleting an item (rubbish bin)



### Nielsen Design Principles/Heuristics

#### 1. **Visibility of system status:** 
*Users should be aware of what’s going on at all times to prevent them feeling lost.*

#### 2. **Match between the system and the real world:** 
*Speak what the user already knows - discard jargon and make use of languages / actions the user is already familiar with from the real world.*
- simple plain English is used on the instructions.  Destination etc. and includes hints where data is required.  Buttons are clearly labelled with action verbs to ensure the user easily understands what it does.

#### 3. **User control and freedom:** 
*Users may make mistakes.Give them the ability to navigate elsewhere or have the freedom to escape - in essence, maximise the control a user has.*
- we allow the user to edit or delete an entry or a category.

#### 4. **Consistency and standards:** 
*Do not differ - follow industry conventions. Jakob’s Law argues that people spend most of their time on other websites, so follow what already exists so that users don’t feel confused by something entirely new.*
- the design is similar to other popular well designed websites.  It is clear what the function of the website  is as soon as the user lands on the page.

#### 5. **Error prevention:** 
*Account for human errors or unexpected situations, and place safeguards.*
 - The trip destination and title will be mandatory.  Date of travel will also be mandatory as this data is used in the API weather call.  The date will be selected from a month and a year (no free text).

#### 6. **Recognition rather than recall:** 
*Minimise memory load by making components easily usable and familiar (e.g. no need to remember anything)*
- any actions that the user can do are easily identifiable and comunicated using simple icons.  The user does not need to navigate or do multiple clicks to do any of the tasks.

#### 7. **Flexibility and efficiency of use:** 
*Experienced users should have the ability to speed up interaction (e.g. ‘Skip’ button!).*
- When creating a list a user can pre-select a number of suggested categoreis.  This will set up the categories within the list, saving the user time and effort (as they do not need to use them manually).

#### 8. **Aesthetic and minimalist design:** *All pieces of information compete for the users attention. Minimise pieces shown to prevent information overloads or clashes.*
- We have limited our use of colours to three.  We will also use seperate colours for tappable/clickable and non tappable/non clickable elements.
- Our buttons are rounded as rounded buttons take less cognitive effort to visually process than square buttons.  They are effective as the 'point inward' towards the centre.
- We are using a simple sans-serif font: Raleway for headings and Nunito for text.

#### 9. **Help users recognise, diagnose and recover from errors:** 
*When errors are shown, abstract the message to a degree that it’s easy for a user to recover (make it a easy-to-understand error message that tells the user how to fix the issue / what to do next).*

#### 10. **Help and documentation:** 
*Systems shouldn’t ordinarily need additional explanation, but in cases they do there should be some documentation available to help the users gain understanding (e.g. like an information kiosk).*
- Where required we will have 'hints' to explain to the user what data we are expecting them to input.




