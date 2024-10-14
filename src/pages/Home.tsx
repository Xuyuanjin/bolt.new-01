import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '我的第一篇博客文章',
    excerpt: '这是我的第一篇博客文章的摘要...',
  },
  {
    id: 2,
    title: '学习React的心得',
    excerpt: '分享我学习React的一些经验和技巧...',
  },
  {
    id: 3,
    title: 'TypeScript入门指南',
    excerpt: '介绍TypeScript的基础知识和使用方法...',
  },
  {
    id: 4,
    title: '大学应届生求职指南',
    excerpt: '为即将毕业的大学生提供求职建议和技巧...',
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">欢迎！本博客由bolt AI生成</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              to={`/post/${post.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              阅读更多 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
