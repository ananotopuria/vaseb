import React from 'react';
import Title from '../Title';

const blogPosts = [
  {
    title:
      'How to choose the perfect sofa a detailed guide to finding the right size, style, and fabric for living room',
    tag: 'Efficient',
    date: 'Jun 22, 2024',
    imgSrc:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ac5c1fa730a4f992f4b7a_blog-main-02.jpg',
    href: '/blog-posts/innovative-design-seamlessly-integrating-smart-home-devices',
  },
  {
    title: 'Living exploring the world of modular furniture for modern homes',
    tag: 'Customizable',
    date: 'Jun 22, 2024',
    imgSrc:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ac5fb1efa5c294e39cb08_blog-thumb-03.jpg',
    href: '/blog-posts/living-exploring-the-world-of-modular-furniture-for-modern-homes',
  },
  {
    title: 'Smart homes integrating technology with modern decor',
    tag: 'Innovative',
    date: 'Jun 13, 2024',
    imgSrc:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ac58cba11c2fd1b696257_blog-thumb-01.jpg',
    href: '/blog-posts/smart-homes-integrating-technology-with-modern-decor',
  },
  {
    title:
      'Stylish sustainability the intersection of fashion and eco-consciousness',
    tag: 'Sustainable',
    date: 'Jun 13, 2024',
    imgSrc:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ac62937e1b7adeace78aa_blog-thumb-04.jpg',
    href: '/blog-posts/stylish-sustainability-the-intersection-of-fashion-and-eco-consciousness',
  },
];

const Blogs: React.FC = () => {
  return (
    
    <section className="blogs py-8">
      <div className="container mx-auto">
        <Title mainTitle="News & Articles" subTitle="Our Blogs" />
        <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="blog-left col-span-2">
            <div className="featured-blog">
              <a href={blogPosts[0].href} className="fb-block w-inline-block">
                <div className="fb-img mb-4">
                  <img
                    src={blogPosts[0].imgSrc}
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 38vw, (max-width: 991px) 96vw, 46vw"
                    srcSet={`${blogPosts[0].imgSrc}-p-500.jpg 500w, ${blogPosts[0].imgSrc}-p-800.jpg 800w, ${blogPosts[0].imgSrc}-p-1080.jpg 1080w, ${blogPosts[0].imgSrc} 1272w`}
                    alt="Post Image"
                    className="fb-image"
                  />
                </div>
                <div>
                  <div className="blog-info mb-2">
                    <div className="post-tag text-gray-500">
                      {blogPosts[0].tag}
                    </div>
                    <div className="post-date text-gray-500">
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <h4 className="fb-title text-2xl">
                    {blogPosts[0].title}
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="blog-right grid grid-cols-1 gap-2">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="post-item">
                <a
                  href={post.href}
                  className="blog-block w-inline-block flex gap-4"
                >
                  <div className="blog-img mb-4">
                    <img
                      src={post.imgSrc}
                      loading="lazy"
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 38vw, (max-width: 991px) 96vw, 46vw"
                      srcSet={`${post.imgSrc}-p-500.jpg 500w, ${post.imgSrc}-p-800.jpg 800w, ${post.imgSrc}-p-1080.jpg 1080w, ${post.imgSrc} 1272w`}
                      alt="Post Image"
                      className="blog-image"
                    />
                  </div>
                  <div>
                    <div className="blog-info mb-2 flex gap-4">
                      <div className="post-tag text-gray-500">{post.tag}</div>
                      <div className="post-date text-gray-500">{post.date}</div>
                    </div>
                    <h6 className="blog-title text-xl">{post.title}</h6>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
