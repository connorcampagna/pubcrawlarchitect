# 🍺 PubCrawl Architect

A web application for planning, organizing, and optimizing pub crawls with your friends!

## 🎯 Project Vision

PubCrawl Architect helps groups plan the perfect pub crawl by:
- Mapping out optimal routes between venues
- Managing group itineraries and timing
- Tracking visited locations and drinks
- Splitting costs and managing group expenses
- Rating and reviewing venues

## 🏗️ Project Structure

```
pubcrawlarchitect/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Main application pages
│   ├── services/       # API calls and external services
│   ├── utils/          # Helper functions and utilities
│   └── styles/         # CSS/styling files
├── public/             # Static assets (images, icons)
├── tests/              # Test files
└── docs/               # Documentation and planning
```

## 🚀 Features (Planned)

### Phase 1: Core Features
- [ ] Venue search and selection
- [ ] Route mapping and optimization
- [ ] Basic itinerary creation
- [ ] Time estimation between venues

### Phase 2: Social Features
- [ ] Group management
- [ ] Shared itineraries
- [ ] Voting on venues
- [ ] Real-time location sharing

### Phase 3: Advanced Features
- [ ] Cost splitting
- [ ] Drink tracking
- [ ] Venue ratings and reviews
- [ ] Photo gallery
- [ ] Weather integration

## 👥 Work Division

### Developer 1: Frontend/UI Focus
- **Components**: Create reusable UI components
  - Navigation bar
  - Venue cards
  - Map component
  - Itinerary list
  - User profile components
  
- **Pages**: Build main application pages
  - Home/Landing page
  - Search/Browse venues page
  - Itinerary builder page
  - Profile page

- **Styling**: Design and implement UI/UX
  - Color scheme and theme
  - Responsive design
  - Mobile optimization

### Developer 2: Backend/Logic Focus
- **Services**: Handle data and API integration
  - Google Maps API integration
  - Venue database/API (Yelp, Google Places)
  - Route optimization algorithms
  - User authentication service
  
- **Utils**: Create helper functions
  - Distance calculations
  - Time estimations
  - Data formatting
  - Validation functions

- **Database**: Design and implement
  - Data models/schema
  - Database setup (Firebase/Supabase)
  - CRUD operations

## 🛠️ Tech Stack (Suggested)

### Frontend
- **Framework**: React.js or Next.js
- **Styling**: Tailwind CSS or Material-UI
- **Maps**: Google Maps API or Mapbox
- **State Management**: Context API or Redux

### Backend
- **Database**: Firebase, Supabase, or MongoDB
- **Authentication**: Firebase Auth or Auth0
- **APIs**: Google Places, Yelp Fusion API
- **Hosting**: Vercel, Netlify, or Firebase Hosting

## 📋 Getting Started

### Prerequisites
```bash
# Node.js (v16 or higher)
node --version

# npm or yarn
npm --version
```

### Installation
```bash
# Clone the repository
git clone https://github.com/connorcampagna/pubcrawlarchitect.git

# Navigate to project directory
cd pubcrawlarchitect

# Install dependencies (once package.json is set up)
npm install

# Start development server
npm run dev
```

## 🤝 Collaboration Workflow

1. **Branch Strategy**
   ```bash
   # Create a new branch for each feature
   git checkout -b feature/your-feature-name
   
   # Make changes and commit
   git add .
   git commit -m "Add: description of changes"
   
   # Push to GitHub
   git push origin feature/your-feature-name
   
   # Create Pull Request on GitHub for review
   ```

2. **Commit Message Convention**
   - `Add:` New features or files
   - `Fix:` Bug fixes
   - `Update:` Modifications to existing features
   - `Refactor:` Code improvements without changing functionality
   - `Docs:` Documentation changes

3. **Communication**
   - Use GitHub Issues for tasks and bugs
   - Use GitHub Projects for tracking progress
   - Regular sync meetings to discuss progress

## 📝 Next Steps

1. **Immediate Actions**
   - [ ] Decide on tech stack
   - [ ] Set up development environment
   - [ ] Create initial project structure
   - [ ] Set up package.json with dependencies
   - [ ] Create development/production branches

2. **Week 1 Goals**
   - [ ] Basic project scaffold
   - [ ] Map integration
   - [ ] Simple venue search
   - [ ] Basic UI layout

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 👨‍💻 Contributors

- Connor Campagna - [@connorcampagna](https://github.com/connorcampagna)
- [Add your friend's name here]
