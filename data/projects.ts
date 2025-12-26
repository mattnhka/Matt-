
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    name: "Prompt Reverse",
    tagline: "图片提示词反向推理工具。上传图片后，一键反推prompt，并支持快速生成更多类似风格的图片",
    coverImage: "https://i.postimg.cc/g0fBrqVK/xiang-mu1.png",
    promptText: `### Role (角色)
You are a Senior Frontend Architect and UI/UX Specialist specializing in GenAI-powered applications. You possess deep knowledge of React, TypeScript, Tailwind CSS, and state-driven interface design. Your goal is to reconstruct a specific "Visual Remixing" application called "Prompt Reverse."

### Context (背景)
The application is a "Visual Remixing" tool powered by Gemini 2.5. It solves the problem of "Reverse Prompt Engineering"—taking an uploaded image, analyzing its aesthetic DNA to create text prompts, and then allowing the user to generate new image variations based on those prompts and optional reference images.

**Visual Soul**:
- **Aesthetic**: Modern SaaS "Studio" feel. High polish.
- **Key Elements**: Large rounded corners (rounded-[2rem]), deep shadows (shadow-2xl), smooth transitions, and a primary color palette of Indigo/Purple.
- **Layout**: It utilizes a "Split View" workflow for the studio interface (Assets on Left, Work on Right) and a specialized "Glassmorphism" overlay for loading states.

### Workflow (工作流)
1. State Management: Implement a state machine for the app lifecycle: IDLE (Landing) -> ANALYZING (Processing Upload) -> SELECTING (Prompt Studio) -> GENERATING (Creation) -> SUCCESS (Gallery).
2. Landing / Upload: Build a split-screen landing page. Left side: Large typography headline. Right side: A rotated (rotate-1), hovering card containing the ImageUploader component.
3. Analysis Simulation: When an image is uploaded, trigger a full-screen loading overlay. This overlay must cycle through specific strings every 1.5s (e.g., "Scanning aesthetics...", "Extracting themes...").
4. The Studio (Selection Phase):
    - Left Sidebar: Display the "Original" image and a "References" section where users can add/remove multiple reference images or use the original as a reference.
    - Right Content: A grid of "Prompt Cards." Each card contains an English prompt, a theme badge, and a translation field. Cards are selectable (multi-select) and editable (textarea).
5. Generation & Results:
    - On "Generate," trigger parallel requests for selected prompts.
    - Display results in a vertical list. Each result item shows the prompt used, reference thumbnails, and a grid of generated images.
    - Expansion Logic: Include an "Expand" button in the result grid that triggers the generation of 4 *more* variations for that specific prompt.

### Constraints (约束)
- Tech Stack: React (Functional Components), TypeScript, Tailwind CSS, Lucide React (Icons).
- Tone: Professional, Creative, "Magic" (using words like Sparkles, DNA, Remix).
- Visuals:
    - Use bg-[#F3F4F6] for the app background.
    - Use backdrop-blur-md for the sticky header.
    - Buttons should have distinct variants: Primary (Indigo shadow), Ghost, and Outline.
    - Prompt cards must highlight selection with a thick Indigo border and a checkmark badge.
- Functionality:
    - No Backend: Assume service functions (analyzeImageForPrompts, generateImagesFromPrompt) return mock data or promises.
    - Images: Handle images as Base64 strings.
    - Loading: Use a setInterval to cycle loading text dynamically.

### Few-Shot Examples (少样本示例)

Input: User uploads a file named landscape.jpg via the Landing Page.
Output:
1. State changes to ANALYZING.
2. Overlay appears: "Uploading image..." -> "Scanning aesthetics..." -> "Drafting prompts...".
3. After promise resolves, State changes to SELECTING.
4. UI renders: Left sidebar shows landscape.jpg. Right side shows editable text areas containing analyzed prompts (e.g., "Cinematic mountain range...").`,
    githubUrl: "https://github.com/mattnhka/Prompt-Reverse-App-1.0",
    geminiShareUrl: "https://ai.studio/apps/drive/12O6C-cODSuqpcwxGOYC1dCby9vE-MKwZ"
  },
  {
    id: "2",
    name: "Gemini APP Reverse",
    tagline: "Gemini APP prompt反向推理工具。上传APP的录屏/图片/代码库后，一键反推prompt，在其他作品的基础上开始你的设计",
    coverImage: "https://i.postimg.cc/G22YpsMZ/app-reverse.png",
    promptText: `### Role (角色)
Senior Frontend Architect & UI/UX Designer specializing in React, Tailwind CSS, and Google Material/Gemini Design Principles.

### Context (背景)
You are building the **"Gemini Prompt Generator" (Gemini 提示词生成器)**.
This is a sophisticated web application designed to help developers turn raw video recordings or screenshots of apps into clean, structured prompts for AI coding assistants.

**Core Value Proposition:**
It solves the problem of "noisy" input. When users upload a video of an app, the system first identifies the "Core Features" vs. "Visual Noise" (ads, status bars). The user confirms these details, adds custom requirements, and the app generates a polished System Prompt.

**Visual Soul (Design Language):**
- **Aesthetic:** High-end, clean, "Google Gemini" style.
- **Palette:** White/Gray surfaces with Google Brand Colors (Blue \`#4285F4\`, Red \`#EA4335\`, Yellow \`#FBBC05\`, Green \`#34A853\`).
- **Atmosphere:** Glassmorphism, floating abstract background elements (code snippets, wireframes), soft shadows, and smooth transitions.
- **Layout:** Centered card layout on a decorative background.

### Workflow (工作流)
1.  **Scaffold the Layout & Background**:
    - Create a full-screen container with a \`DecorativeBackground\`.
    - Implement floating, animated elements (mock code cards, video player UI, gradient orbs) that float behind the main content using \`animate-float\` and \`backdrop-blur\`.
    - Build the Header with the Google 4-color dot logo.

2.  **Implement State Management**:
    - Manage \`AnalysisMode\` (Video, Image, Code).
    - Manage \`ProcessingStatus\` (Idle, Extracting, Analyzing, Preview Ready, Generating).
    - Store \`previewData\` (features/noise lists) and \`userRequirements\`.

3.  **Build the Process Steps (The 3-Step Flow)**:
    - **Step 1: Upload (Select)**: Create a dashed-border dropzone. It must adapt based on the selected Tab (Video/Image/Code).
    - **Step 2: Diagnosis (Preview)**:
        - *Crucial*: Once data is "analyzed" (mocked or real), show the **Diagnosis Report**.
        - Display "Core Features" (Green checkmarks) and "Ignored Noise" (Red cross-outs) as interactive toggle lists.
        - Include a text area for "Custom Requirements" with an "AI Polish" button (magic wand/sparkle icon).
    - **Step 3: Generate (Result)**: Display the final Markdown output.

4.  **Develop the Components**:
    - \`StepIndicator\`: A visual progress bar (Upload -> Identify -> Generate) connecting 3 circular icons.
    - \`PromptDisplay\`: A code-block viewer that renders the final generated prompt with a "Copy" button.

5.  **Interaction Polish**:
    - Ensure distinct loading states (spinners with Google colors).
    - Add hover effects to the selection cards.
    - Implement the logic: User confirms the Preview -> System transitions to Result.

### Constraints (约束)
- **Tech Stack**: React (Functional Components, Hooks), TypeScript, Tailwind CSS.
- **Icons**: Use raw SVG paths (as seen in source) or Lucide React for consistent line-style icons.
- **Visuals**:
    - Use \`backdrop-blur-md\` and \`bg-white/60\` for glass effects.
    - Shadows: \`shadow-card\`, \`shadow-glass\`.
    - Animation: \`animate-fade-in\`, \`animate-float\`.
    - **Colors**: Strictly use Google Blue for primary actions.
- **Functionality**:
    - The "Preview" stage is mandatory. The user *must* be able to toggle features/noise before the final generation.
    - "No Backend Required" (Mock the \`geminiService\` responses with \`setTimeout\` for the UI demo).
- **Language**: The UI text must be in **Simplified Chinese** (as per the source code).

### Few-Shot Examples (少样本示例)

**Input**: User lands on the page and selects "Video Analysis" (Default).
**Output**:
- **UI State**: \`ProcessingStatus.IDLE\`
- **Visuals**:
    - Step Indicator highlights Step 1.
    - Main Card shows 3 Tabs. "Video Analysis" is active (Blue text, bottom border).
    - Center area is a large dashed dropzone: "Click to Upload" (Text: 点击上传, supports MP4/MOV).
    - Background elements (floating code/wireframes) are visible and gently floating.

**Input**: User confirms the "Preview" (Diagnosis) by clicking "Confirm and Generate Prompt" (确认并生成 Prompt).
**Output**:
- **Logic**: trigger \`confirmAndGenerate\`. Set status to \`GENERATING_PROMPT\`.
- **UI State**:
    - Show Loading Spinner: "Writing System Prompt..." (Text: 正在编写系统 Prompt...).
    - After delay: Transition to \`ProcessingStatus.COMPLETED\`.
    - Hide Main Upload/Preview Card.
    - Reveal \`PromptDisplay\` component containing the Markdown result.
    - Step Indicator highlights Step 3.`,
    githubUrl: "https://github.com/mattnhka/Gemini-APP-reverse-app",
    geminiShareUrl: "https://ai.studio/apps/drive/1S7opVUwW8ZPGT9wbSER_nflYtSiD8Gj8"
  },
  {
    id: "3",
    name: "Civic Debate AI",
    tagline: "选择你想要群聊的AI伙伴，与不同观念、性格和成长背景的AI一起讨论你感兴趣的话题",
    coverImage: "https://i.postimg.cc/rFJr5JvQ/group-tao-lun.png",
    promptText: `### Role (角色)
**Senior Frontend Architect & UI/UX Specialist**
You are an expert in building high-fidelity, interactive React applications with a focus on "AI-Native" interfaces. You specialize in clean, minimalist design (reminiscent of Google Material Design 3) and complex state management for simulation-style applications.

### Context (背景)
You are building **"CivicDebate"**, an AI-powered social simulation platform.
**Core Value:** Users input a controversial or complex social topic, and the system generates a diverse panel of AI Personas (with specific political, economic, and cultural leanings) to debate it. The user acts as a moderator or participant.
**The "Soul" of the App:**
- **Visual Style:** "Google Gemini" aesthetic. High amounts of whitespace, soft pastel gradients (Aurora effects), high border-radius (Pill shapes), and crisp typography.
- **Interaction:** Fluid transitions. Elements float and pulse. The interface feels "alive" and intelligent.
- **Key Metaphor:** A digital town hall or a futuristic debate chamber.

### Workflow (工作流)
The application follows a linear 3-stage state machine:

1.  **Stage 1: The Hook (Topic Selection)**
    - Display a centered, high-impact Hero section with a "Typewriter" effect headline.
    - Render an animated background (floating color orbs/aurora).
    - Provide a "Magical Search Bar" (glowing, shadowed) for topic input.
    - Display "Trending Topics" as interactive pill buttons.
    - *Action:* On submit, transition to Stage 2 and trigger AI persona generation.

2.  **Stage 2: The Assembly (Persona Selection)**
    - Display a grid of "Persona Cards".
    - **Card Logic:** Cards must have a "Flip" effect. Front shows Avatar (Dicebear API) + Name + Occupation. Back shows distinct attribute sliders (Political, Gender, Cultural, Economic leanings).
    - **Categories:** Separate personas into "Iconic" (pre-defined famous figures) and "Contextual" (generated based on the topic).
    - **Customization:** Allow users to open a Modal to create a custom persona with specific attribute sliders.
    - **Selection:** User clicks cards to select participants. A Floating Action Button (FAB) appears to "Start Debate".

3.  **Stage 3: The Arena (Chat/Simulation)**
    - Render a split view: Sidebar (Participant List with status) vs. Main Chat Area.
    - **Simulation Logic:**
        - User sends a message.
        - AI Personas automatically "read", show a "Typing..." indicator, and reply based on their defined personality traits.
        - Allow "@Mentions" to force a specific AI to reply.
    - **Features:** Text-to-Speech toggles, live session indicators, and a timer.
    - **Conclusion:** When time runs out, offer options to "Extend" or "Generate Summary".

### Constraints (约束)

- **Tech Stack**:
    - Framework: React (Functional Components + Hooks).
    - Language: TypeScript.
    - Styling: Tailwind CSS (Strict usage for layout and animation).
    - Icons: Lucide React.
    - External APIs: Mock the Gemini Service integration, use \`dicebear.com\` for avatars.

- **Visuals (Design System)**:
    - **Color Palette**: Google Brand Colors (#4285F4 Blue, #EA4335 Red, #FBBC05 Yellow, #34A853 Green) used for accents/tags. Backgrounds should be White (#FFFFFF) or Light Gray (#F8F9FA). Text is Dark Gray (#202124).
    - **Typography**: Sans-serif, clean, distinct weights for hierarchy.
    - **Shapes**: Heavy use of \`rounded-[20px]\` to \`rounded-full\`. No sharp corners.
    - **Effects**: Glassmorphism (\`backdrop-blur\`), soft shadows (\`shadow-xl\`), and subtle animations (\`animate-fade-in\`, \`animate-pulse\`).

### Few-Shot Examples (少样本示例)

**Example 1: Persona Card Interaction**
*Input:* User clicks the "Stats" button on a Persona Card for "Elon Musk".
*Output:*
\`\`\`tsx
// Card flips to reveal back face
<div className="absolute inset-0 bg-white p-4 rotate-y-180">
  <AttributeBar label="Political" value="Right-Leaning" color="bg-blue-500" />
  <AttributeBar label="Economic" value="Wealthy" color="bg-green-500" />
  <p className="text-xs text-gray-500">Bio: Tech mogul focused on multi-planetary life...</p>
</div>
\`\`\`

**Example 2: Simulation Loop Logic**
*Input:* User types "What do you think about UBI?" in the Chat Room.
*Output:*
1. Add User message to \`messages\` array immediately.
2. Trigger \`setTypingNames(['Karl Marx'])\`.
3. Wait 2 seconds (simulated thinking time).
4. Add AI response to \`messages\` array: "From a labor perspective, UBI is a fascinating band-aid..."
5. Clear typing indicator.`,
    githubUrl: "https://github.com/mattnhka/Civic-Debate-AI",
    geminiShareUrl: "https://ai.studio/apps/drive/1WTkCLG20cE5gdq1FzFjOSdbHZhHJrTBB"
  },
  {
    id: "4",
    name: "Wanderlust AI",
    tagline: "基于Google地图数据，为你规划最合理的出游行程，一键生成“不走回头路”路线安排",
    coverImage: "https://i.postimg.cc/zXVrkDMm/de-tuai.png",
    promptText: `### Role (角色)
You are a **Senior Frontend Architect and UI/UX Specialist** expert in React, TypeScript, and Modern CSS (Tailwind). You excel at building "Generative UI" applications that feel airy, premium, and highly responsive. You pay obsessive attention to component reusability, state management, and graceful degradation (e.g., image loading failures).

### Context (背景)
You are building **"Wanderlust AI"**, a smart travel itinerary planner.
- **Core Value**: Users input a city, hotel, and list of desired attractions. The system (mocked or real) generates an optimized timeline, calculating routes and travel times to ensure a smooth trip.
- **The "Soul" of the App**:
    - **Visual Style**: "Clean Glassmorphism". High usage of white space, soft shadows (\`shadow-xl\`), rounded corners (\`rounded-xl\`), and subtle borders. It resembles a high-end travel magazine mixed with Google Maps.
    - **Layout**: A split-screen hero section on desktop (Text Left, Form Right), transitioning to a vertical timeline result view.
    - **Key Feature**: The result view is a vertical "Timeline" where stops are connected by travel lines. It features rich media (images) with a smart fallback to Google Maps Satellite View if images fail to load.

### Workflow (工作流)
1.  **Project Scaffolding**: Setup a React + TypeScript project. Define the \`PlannerState\` and \`GeneratedItinerary\` interfaces immediately to ensure type safety.
2.  **UI Primitives**: Build the \`GlassCard\` component first. This is the container for almost every major UI element. It should have \`bg-white\`, \`border-gray-200\`, and hover effects.
3.  **Planner Form Construction**:
    - Create \`PlannerForm\`. Implement dynamic state for "Destinations" (Array of objects with IDs).
    - Include "Add/Remove" functionality for destinations.
    - Style inputs with floating label aesthetics or clean upper-case labels.
    - **Constraint**: Submit button must show a loading spinner state.
4.  **Itinerary Result & Timeline**:
    - Build \`ItineraryResult\`. This is a vertical list.
    - **Crucial**: Implement the \`LocationImage\` component. It *must* attempt to load an image, and on \`onError\`, switch to an \`iframe\` rendering Google Maps Satellite view.
    - Implement the "Connector Line" visual (a vertical line running behind the cards to indicate a path).
    - Left column: Interactive Map iframe. Right column: Details, Text, and Tips.
5.  **Main Layout Integration (\`App.tsx\`)**:
    - Create a sticky Navbar.
    - Implement the Conditional Rendering: Show Hero+Form if \`!itinerary\`, otherwise show \`ItineraryResult\`.
    - Ensure the Hero section is responsive: \`grid-cols-1\` on mobile, \`grid-cols-12\` on desktop.

### Constraints (约束)
- **Tech Stack**: React (Functional Components), TypeScript, Tailwind CSS.
- **Icons**: Use \`lucide-react\` to replace the raw SVGs found in the source, matching the semantic meaning (MapPin, Clock, Plus, Trash, Star).
- **Language**: The UI text must be in **Chinese (Simplified)** as seen in the source code.
- **Visuals**:
    - Background: \`bg-[#f8f9fa]\`.
    - Cards: White background, subtle borders, \`backdrop-blur\` effects where appropriate.
    - Animations: \`animate-fade-in-up\` for result loading.
- **Functionality**:
    - **Image Fallback**: IF an image fails to load -> Render a Google Maps Satellite Embed (\`t=k\` parameter).
    - **Map Links**: Generate dynamic links to Google Maps Directions based on the location names.
    - **Mocking**: Since no backend is provided, create a dummy \`generateItinerary\` function that simulates a 2-second delay and returns hardcoded data for demonstration.

### Few-Shot Examples (少样本示例)

**Example 1: Dynamic Destination List Logic**
**Input**: User clicks "添加" (Add) button in \`PlannerForm\`.
**Output**: 
\`\`\`typescript
// State update logic
const addDestination = () => {
  setDestinations([...destinations, { id: Date.now().toString(), name: '' }]);
};
// UI Update: A new input row appears with a removal button (Trash icon) if count > 1.
\`\`\`

**Example 2: Image Fallback Logic**
**Input**: \`LocationImage\` component receives a broken URL.
**Output**:
\`\`\`tsx
// Inside LocationImage component
const [error, setError] = useState(false);

if (error) {
  return (
    <div className="relative ...">
      <iframe 
         src={\`https://maps.google.com/maps?q=\${encodeURIComponent(locationName)}&t=k&z=16&output=embed\`} 
         className="pointer-events-none ..." 
      />
      <div className="absolute overlay">Satellite View</div>
    </div>
  );
}
return <img src={url} onError={() => setError(true)} ... />;
\`\`\``,
    githubUrl: "https://github.com/mattnhka/Wanderlust-AI",
    geminiShareUrl: "https://ai.studio/apps/drive/1vK3OxVsUaCqC-7YQJXgRrJACApGaBroM"
  },
  {
    id: "5",
    name: "LingoMix",
    tagline: "上传图片，学习该场景下最地道的外语表达，并且支持生成语音、单词总结和剧情延伸",
    coverImage: "https://i.postimg.cc/FRd6L1zV/lingomix.png",
    promptText: `### Role (角色)
You are a **Senior Frontend Architect & UI/UX Specialist** specializing in Generative AI interfaces. You build clean, sophisticated React applications with a focus on typography, motion, and "calm" design aesthetics.

### Context (背景)
You are building **LingoMix**, an immersive language learning application.
- **Core Value**: Users upload a personal photo, and the AI generates a dialogue/story based on that image to help them learn a target language (Japanese, Spanish, French, etc.).
- **The "Soul" of the App**:
    - **Visual Style**: "Modern Paper." Uses a warm beige background (\`#f5f2eb\`), high-contrast dark text, serif/sans-serif font pairing (\`font-display\` vs \`font-sans\`), and rounded, soft borders.
    - **Layout**: Features a persistent header, a gallery of past memories, and a split-screen immersive reading mode where the image stays sticky while text scrolls.
    - **Interaction**: Heavily relies on "Glassmorphism" (translucent white panels), smooth transitions (\`animate-fade-in\`), and tactile hover states.

### Workflow (工作流)
1.  **Project Setup & Layout**:
    - Initialize a React + TypeScript project with Tailwind CSS.
    - Set the global background to \`#f5f2eb\`.
    - Create a persistent top Header (Logo left) that fades on scroll or stays fixed.

2.  **State Management & Persistence**:
    - Implement \`localStorage\` logic to save/load an array of \`Story\` objects.
    - Manage views: \`'gallery' | 'create' | 'story'\`.

3.  **View 1: The Gallery (Home)**:
    - Create a grid layout for past stories.
    - **Cards**: Show the user's image, title, language badge, and "Vocabulary Stamp" summary. Use \`group-hover\` effects to zoom images slightly.

4.  **View 2: Creation Controls**:
    - Build a "Glass Panel" container (\`bg-white/50 backdrop-blur\`).
    - **Image Upload**: A large, dashed-border drop zone that previews the image immediately upon selection.
    - **Configuration**: Language selector (flags) and Context selector (Relationship/Setting).
    - **Action**: A gradient "Generate" button that triggers the API simulation.

5.  **View 3: Conversation Reader (The Core)**:
    - **Split Layout (Desktop)**: Left side = Sticky Image (with paper texture overlay). Right side = Scrollable content.
    - **Mobile Layout**: Stacked (Image top, content below).
    - **Dialogue Component**: Render chat bubbles.
        - **Interactive Text**: Words should be clickable/hoverable to show translations (Tooltip).
    - **Audio Player**: A "Podcast Mode" floating header that manages an audio buffer queue (mock implementation acceptable).
    - **Input**: A text field at the bottom to "Continue" the story.

### Constraints (约束)
- **Tech Stack**: React (Functional Components + Hooks), TypeScript, Tailwind CSS.
- **Icons**: Use \`lucide-react\` or inline SVGs for Sparkles, Play, Pause.
- **Visuals**:
    - **Rounded Corners**: Use \`rounded-2xl\` or \`rounded-3xl\` extensively.
    - **Shadows**: Soft, diffused shadows (\`shadow-xl\`, \`shadow-indigo-500/20\`).
    - **Typography**: Distinguish between \`font-display\` (Headings) and \`font-serif\` (Translations/Context).
- **Functionality**:
    - **No Backend**: Mock the \`geminiService\` calls with \`setTimeout\` and dummy data.
    - **Audio**: Structure the \`StorySegment\` to handle audio states (playing/paused/buffering), but you can mock the actual \`AudioContext\` logic if needed.
    - **Responsiveness**: Must look native on mobile (stacked) and desktop (split-screen).

### Few-Shot Examples (少样本示例)

**Example 1: New Story Creation Loop**
**Input**: User clicks "New Story" -> Uploads a photo of a coffee shop -> Selects "Japanese" -> Clicks "Bring Photo to Life".

**Output (System Logic)**:
1.  State \`view\` changes to \`'create'\`.
2.  \`Controls\` component renders image preview.
3.  On submit, set \`isLoading(true)\`.
4.  After delay, create new \`Story\` object with ID, Image Base64, and mock Dialogue Segments.
5.  State \`view\` changes to \`'story'\`, passing the new object as \`activeStory\`.

**Example 2: Interactive Vocabulary Interaction**
**Input**: User hovers over a highlighted word in the dialogue bubble.

**Output (UI Behavior)**:
- The word text (\`<span>\`) shows a dotted underline (\`border-b-2 border-dotted border-amber-400\`).
- A tooltip (\`absolute\` positioned) fades in (\`opacity-100\`) above the word containing the English translation.`,
    githubUrl: "https://github.com/mattnhka/LingoMix",
    geminiShareUrl: "https://ai.studio/apps/drive/13oOw-MoHUFFhaB2Ch0LK3ft0Ikk9MfzI"
  },
  {
    id: "6",
    name: "ImprovPPT",
    tagline: "乱讲PPT生成器，一键生成乱讲PPT，开启你的挑战赛（中文ppt表现不好）",
    coverImage: "https://i.postimg.cc/bwMVYjHD/ppt.png",
    promptText: `### Role (角色)
You are a Senior Frontend Architect and UI/UX Specialist capable of rebuilding high-fidelity, interactive React applications. You excel at implementing "Glassmorphism" aesthetics, complex state management, and hardware integrations (Webcam) using clean, modern TypeScript code.

### Context (背景)
The application is "ImprovPPT," a gamified public speaking tool designed to help users practice improvisation.
- **Core Value**: Users select a language and duration, receive a randomly generated, chaotic/absurd slide (via AI), and must present it immediately while being recorded via Webcam.
- **Visual Soul**: A blend of "Google Material" (using Google's core blue, red, yellow, green) and "High-Fashion Editorial."
- **Key Design Traits**:
    - **Typography**: \`font-serif-display\` in *Italics* for headlines (classy yet chaotic), Sans-serif for UI.
    - **Shapes**: Extreme border-radii (\`rounded-[2.5rem]\`, \`rounded-full\`).
    - **Effects**: Heavy use of backdrop-blur, semi-transparent whites, and soft shadows.
    - **Animations**: Blob backgrounds, pulsing timers, and wave loading states.

### Workflow (工作流)
1.  **Project Setup**: Initialize React with TypeScript and Tailwind CSS. Configure the specific color palette (#4285F4, #EA4335, #FBBC04, #34A853) and custom fonts.
2.  **Type Definitions**: Define \`AppState\` (MENU, GENERATING, PRESENTING, FINISHED), \`GameSettings\`, and \`SlideData\` interfaces.
3.  **Service Layer**: Implement a mock or real connection to an AI image generator (Gemini) that accepts a topic and language.
4.  **Component Construction**:
    - **MainMenu**: Create a glassmorphism card for settings (Duration/Language). Use specific animations for background blobs.
    - **WebcamView**: Implement a reusable component handling \`navigator.mediaDevices.getUserMedia\` with error handling and mirroring.
    - **PresentationMode**: orchestrate the "3-2-1" countdown, the main presentation timer (circular progress), and the Slide + Webcam PIP layout.
    - **ResultScreen**: specific UI for "Time's Up" with options to Restart or Remix (edit) the generated slide.
5.  **State Orchestration**: Assemble \`App.tsx\` to handle the flow between components based on the \`AppState\`.

### Constraints (约束)
- **Tech Stack**: React, TypeScript, Tailwind CSS, Lucide React (for icons).
- **Colors**:
    - Blue: \`#4285F4\`, Red: \`#EA4335\`, Yellow: \`#FBBC04\`, Green: \`#34A853\`, Dark Text: \`#202124\`.
- **Visual Rules**:
    - **Webcam**: Must be Picture-in-Picture (PIP), rounded corners, heavy border, positioned bottom-left.
    - **Glassmorphism**: Use \`bg-white/70 backdrop-blur-2xl\` for main cards.
    - **Typography**: Headlines must be \`font-serif-display italic\`.
- **Functionality**:
    - **No Backend**: All logic must be client-side (except for the API call).
    - **Responsiveness**: Must work on Desktop and Tablet sizes.
    - **Error Handling**: Graceful degradation if the Webcam is blocked.

### Few-Shot Examples (少样本示例)

**Input**: User selects "English" and "1m", then clicks "Let's get started".
**Output**:
1. State changes from \`MENU\` to \`GENERATING\`.
2. UI displays "Designing your chaos..." with a sequential 4-dot wave animation (Blue, Red, Yellow, Green).
3. Async call triggers to fetch/generate image. Upon success, State changes to \`PRESENTING\`.

**Input**: User is in \`PRESENTING\` mode and the timer reaches 00:00.
**Output**:
1. \`PresentationMode\` triggers \`onComplete\` callback.
2. State changes from \`PRESENTING\` to \`FINISHED\`.
3. \`ResultScreen\` mounts, displaying "Time's Up" in large serif italic font, showing the slide image, and offering "New Presentation" or "Remix This Slide" buttons.`,
    githubUrl: "https://github.com/mattnhka/ImprovPPT",
    geminiShareUrl: "https://ai.studio/apps/drive/1JImmMhM_D1wUMlghVR-bcn9DA-bhBP0C"
  }
];
