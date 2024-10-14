import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">关于我</h1>
      <img
        src="https://blog.lnpine.lol/wp-content/uploads/2024/04/cropped-3-150x150.jpg"
        alt="个人照片"
        className="w-64 h-64 rounded-full mx-auto mb-6 object-cover"
      />
      <div className="prose max-w-none">
        <p>
          你好！我是一名热爱编程和写作的开发者。这个博客是我分享我的编程经验、技术见解和个人成长的地方。
        </p>
        <p>
          我主要关注前端开发技术，特别是React和TypeScript。在这里，你可以找到关于这些主题的教程、技巧和最佳实践。
        </p>
        <p>
          除了编程，我还喜欢阅读、旅行和摄影。我相信保持广泛的兴趣有助于成为一个更全面的开发者。
        </p>
        <p>
          欢迎经常访问我的博客，一起学习和成长！如果你有任何问题或建议，随时与我联系。
        </p>
      </div>
    </div>
  );
};

export default About;
