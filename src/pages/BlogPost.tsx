import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  1: {
    title: '我的第一篇博客文章',
    content: '这是我的第一篇博客文章的完整内容。在这里，我们可以详细讨论各种主题...',
    date: '2024-03-15',
  },
  2: {
    title: '学习React的心得',
    content: '在学习React的过程中，我发现了一些非常有用的技巧和最佳实践...',
    date: '2024-03-20',
  },
  3: {
    title: 'TypeScript入门指南',
    content: 'TypeScript是JavaScript的超集，它添加了静态类型检查和其他有用的功能...',
    date: '2024-10-14',
  },
  4: {
    title: '大学应届生求职指南',
    content: `作为一名即将毕业的大学生，找工作可能是一个既兴奋又充满挑战的过程。以下是一些有助于你成功求职的建议：

1. 提前准备：从大三下学期就开始关注就业信息，参加校园招聘会和行业交流活动。

2. 完善简历：突出你的学习成果、实习经历、项目经验和技能。确保简历没有错别字，格式清晰。

3. 实习经验：尽可能争取相关行业的实习机会，这将大大提高你的竞争力。

4. 网络建设：利用LinkedIn等职业社交平台，与行业人士建立联系。

5. 技能提升：根据目标岗位要求，有针对性地提升自己的技能。对于IT行业，可以通过开源项目展示编程能力。

6. 面试准备：研究公司背景，准备常见面试问题的回答，进行模拟面试。

7. 心态调整：保持积极乐观的态度，不要因为被拒绝而气馁。每次面试都是学习的机会。

8. 关注行业动态：了解你感兴趣行业的最新发展和趋势，在面试中展现你的洞察力。

9. 善用学校资源：充分利用学校的就业指导中心，参加简历修改、模拟面试等活动。

10. 合理规划：平衡好求职与学业，确保顺利毕业的同时，也为未来职业做好准备。

记住，找到理想的工作可能需要时间和耐心。保持积极的态度，相信自己的能力，你一定能找到适合自己的职业起点！`,
    date: '2024-10-14',
  },
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">发布日期：{post.date}</p>
      <div className="prose max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;