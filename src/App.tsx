import './App.css'
import ArticleCard, { Article } from './components/ArticleCard';

const App: React.FC = () => {

  const articleData: Article = {
    title: "HTML & CSS foundations",
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    author: "Greg Hooper",
    authorImage: "https://raw.githubusercontent.com/keyule/Frontend-Mentor-Blog-Preview-Card/main/src/assets/images/image-avatar.webp",
    publishDate: "21 Dec 2023",
    imageUrl: "https://raw.githubusercontent.com/keyule/Frontend-Mentor-Blog-Preview-Card/cf782bd51f6421f25e0bac4b34cccc415d6876cc/src/assets/images/illustration-article.svg", 
    tags: ['Learning', 'HTML', 'CSS']
  };

  return (
    <div className="App">
      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <ArticleCard article={articleData} />
      </div>
    </div>
  );
};

export default App
