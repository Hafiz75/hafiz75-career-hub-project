const JobCategory = ({category}) => {
    const {id, logo, category_name, availability } = category
    return (
        <div className="py-8 pl-8 pr-14 bg-[linear-gradient(90deg,rgba(126,144,254,0.05)_0%,rgba(152,115,255,0.05)_100%)]">
            <img src={logo} className="bg-[linear-gradient(90deg,rgba(126,144,254,0.10)_0%,rgba(152,115,255,0.10)_100%)] p-3 rounded-lg" alt="" />
            <h6 className="text-[#474747] text-lg font-bold">{category_name}</h6>
            <p className="text-[#A3A3A3] font-medium">{availability}</p>
        </div>
    );
};

export default JobCategory;