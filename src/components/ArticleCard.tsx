import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from "react";

export type Article = {
  title: string;
  description: string;
  author: string;
  authorImage: string;
  publishDate: string;
  imageUrl: string;
  tags: string[];
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <CardContainer className=" hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
      <CardBody className="bg-gray-50 relative group/card border-black/[0.2] max-w-sm sm:w-[30rem] h-auto rounded-3xl p-5 border shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
        <CardItem translateZ="100" className = "mb-6">
          <img className="rounded-xl" src={article.imageUrl} alt="Article" />
        </CardItem>

        <div className="flex flex-wrap my-4">
          {article.tags.map((tag, index) => (
            <CardItem
              as="button"
              translateZ="80"
              translateX="10"
              className="text-xs font-bold inline-block py-1 px-2 rounded-full bg-yellow-200 mr-2 mb-2"
              key={index}
            >
              {tag}
            </CardItem>
          ))}
        </div>

        <CardItem
          as="p"
          translateZ="60"
          translateX="10"
          className="text-xs font-medium text-gray-600"
        >
          Published {article.publishDate}
        </CardItem>

        <CardItem
          as="p"
          translateZ="100"
          translateX="10"
        >
          <a href="#" className="block mt-2">
            <h2 className="text-xl font-bold hover:text-yellow-600 transition-colors duration-300">
              {article.title}
            </h2>
          </a>
        </CardItem>

        <CardItem
          as="p"
          translateZ="80"
          translateX="10"
          className="mt-2 text-sm text-gray-700"
        >
          {article.description}
        </CardItem>

        <div className="flex items-center mt-5">
          <CardItem translateZ="60" translateX="10" className="pr-3">
            <a href="#">
              <img alt="profile" src={article.authorImage} className="h-10" />
            </a>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            translateX="10"
            className="text-sm font-bold text-gray-800"
          >
            {article.author}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ArticleCard;
/* export default ArticleCard;
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
} */
