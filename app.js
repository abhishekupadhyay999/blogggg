document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    // Sample blog posts data
    const posts = [
        { title: 'Startup Uncut with Mr Sanjeev Bikhchandani',
            content: 'Indian startups in the recent time have proven to be the changemakers at the global level. With more than 1 lakh DPIIT recognised startups, Indian entrepreneurs have caused a dynamic shift in world’s perspective towards our innovation. One such groundbreaking business was InfoEdge, which now owns, operates and invests in various internet-led businesses. In this blog interview series, we have Mr. Sanjeev Bikhchandani, a member of National Startup Advisory Council and Co-Founder of Info Edge India Ltd, as he talks with Shaurya Bhaglal from Startup India team about Breaking Barriers in the journey of a startup towards a scaled-up business.' },
        { title: 'Brainstorming the Brainstorming: 7 Ways to Convert Startup Ideas into Reality', content: 'If we talk realistically, thousands of startups are already in existence, and probably more if we talk about startups globally. Perhaps this is where brainstorming comes in. Brainstorming is one of the effective ways to let the creative juices flow and come up with lots of new ideas all at once. The process of brainstorming can be as simple as making a list of potential ideas or as detailed as creating a mind map. Brainstorming usually happens at the beginning stage of a startup, and its goal is to end up with creative ideas to help define the problem and all of the possible solutions. As an aspiring business entrepreneur, you can brainstorm using a whiteboard, online software or just simply a pen and paper.' },
        { title: 'Women Entrepreneurs Propelling D2C in India', content: 'The Direct to Consumer (D2C or DTC) sector in India has seen tremendous growth over the last decade. This growth has been propelled by the startups and innovators who have incorporated the D2C model into their ventures spanning various sectors. Among these, the top 3 sectors that have seen the highest number of D2C startups are Personal and Home Care, Food and Beverages, and Fashion. [1] Among the multiple factors that have contributed to the growth of D2C in India, the developing digital infrastructure and internet penetration, along with a shift in consumer preferences, are the key drivers of this growth.' }
    ];

    // Function to display posts
    const displayPosts = () => {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    };

    // Load posts on page load
    displayPosts();
});