# EcoTrackers - Base MiniApp

Track your carbon footprint, earn rewards, and build a greener future through this Base MiniApp integrated with Farcaster.

## Features

- **Manual Activity Logging**: Quick and easy logging of daily activities (transport, food, energy usage)
- **Carbon Footprint Tracking**: Real-time calculation and visualization of your carbon impact
- **Gamified Rewards**: Earn points, badges, and potentially BASE tokens for sustainable actions
- **Personalized Tips**: AI-driven advice tailored to your habits and data
- **Social Challenges**: Community challenges with leaderboards and social sharing
- **Farcaster Integration**: Seamless identity and social sharing within the Base ecosystem

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Identity**: Farcaster integration via MiniKit
- **Wallet**: OnchainKit for smart wallet functionality
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd ecotrackers
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your API keys:
   - `NEXT_PUBLIC_MINIKIT_API_KEY`: Your Base MiniKit API key
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key

3. **Development**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Header, Navigation)
│   └── features/          # Feature-specific components
├── lib/
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # App constants and sample data
└── public/                # Static assets
```

## Key Components

### Core Features
- **CarbonFootprintDisplay**: Circular progress visualization of daily carbon impact
- **ActivityLogger**: Form-based activity logging with real-time impact calculation
- **ChallengesList**: Community challenges with participation tracking
- **PersonalizedTips**: AI-driven recommendations based on user data
- **UserProgress**: Gamification elements (levels, streaks, rankings)

### UI Components
- **Button**: Multi-variant button component with loading states
- **Card**: Flexible card component with interactive variants
- **ProgressBar**: Horizontal and circular progress indicators
- **Badge**: Status and achievement badges
- **InputWithLabel**: Form inputs with validation

## Carbon Calculation

The app uses simplified emission factors for demonstration:
- **Transport**: Car (0.21 kg CO₂/km), Bus (0.08), Train (0.04), Bike/Walk (0)
- **Food**: Meat (6.61 kg CO₂/kg), Dairy (3.15), Vegetables (0.43), Grains (1.57)
- **Energy**: Electricity (0.5 kg CO₂/kWh), Gas (2.3 kg CO₂/m³)

*Note: Production apps should use comprehensive, region-specific emission factors.*

## Base MiniApp Integration

### MiniKit Features
- Farcaster identity integration
- Base chain connectivity
- Social sharing capabilities
- Frame-based interactions

### OnchainKit Integration
- Smart wallet connectivity
- Transaction handling
- Identity verification
- Base ecosystem integration

## Design System

The app follows a clean, eco-friendly design system:

### Colors
- **Primary**: `hsl(140, 70%, 40%)` (Green)
- **Accent**: `hsl(190, 80%, 50%)` (Blue)
- **Background**: `hsl(0, 0%, 98%)` (Light gray)
- **Surface**: `hsl(0, 0%, 100%)` (White)

### Typography
- **Display**: 3xl, bold
- **Heading**: xl, semibold  
- **Body**: base, normal, leading-7
- **Caption**: sm, normal

## Future Enhancements

- **Automated Data Integration**: Connect with smart home devices and travel apps
- **Advanced Analytics**: Detailed carbon footprint analysis and trends
- **Token Rewards**: BASE token distribution for verified sustainable actions
- **Social Features**: Friend connections, group challenges, leaderboards
- **AI Agent**: Enhanced personalized recommendations and chat interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in this repository
- Join the Base developer community
- Check the [Base MiniApp documentation](https://docs.base.org/mini-apps/)
