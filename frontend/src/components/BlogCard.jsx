
const BlogCard = ({ title, author, date, content, imageUrl }) => {
    return (
        <div className="blog-card flex flex-col gap-4 bg-white h-fit w-fit p-10 relative z-8" >
            <div className="card-img">
                <img src={imageUrl} alt="" width={500} className="rounded-md"/>
            </div>
            <div className="blog-card__content flex flex-col gap-4">
                <h2 className="blog-card__title font-bold text-2xl">{title}</h2>
                <p className="blog-card__meta">
                    {/* By <span className="blog-card__author">{author}</span> on{' '} */}
                    <span className="blog-card__date">{date}</span>
                </p>
                <p className="blog-card__excerpt">{content.length > 500 ? `${content.slice(0, 500)}...` : content}</p>

            </div>
        </div>
    );
};

export default BlogCard;