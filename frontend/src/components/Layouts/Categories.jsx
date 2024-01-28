import mobiles from '../../assets/images/Categories/Banarasi Saree .png';
import fashion from '../../assets/images/Categories/Chanderi saree.png';
import electronics from '../../assets/images/Categories/Kanjeevaram Saree.png';
import home from '../../assets/images/Categories/Assam Silk Saree.png';
import travel from '../../assets/images/Categories/Sambalpuri.png';
import appliances from '../../assets/images/Categories/Georgette (2).png';
import furniture from '../../assets/images/Categories/Saree.png';
import beauty from '../../assets/images/Categories/beauty.png';
import grocery from '../../assets/images/Categories/fashion.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Banarasi Saree",
        icon: mobiles,
    },
    {
        name: "Chanderi saree",
        icon: fashion,
    },
    {
        name: "Kanjeevaram Saree",
        icon: electronics,
    },
    {
        name: "Assam Silk Saree",
        icon: home,
    },
    {
        name: "Sambalpuri",
        icon: travel,
    },
    {
        name: "Georgette",
        icon: appliances,
    },
    {
        name: "Saree",
        icon: furniture,
    },
    {
        name: "Beauty,Toys & more",
        icon: beauty,
    }
    // {
    //     name: "Georgette",
    //     icon: grocery,
    // },
]


const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
            <div className="flex items-center justify-between mt-4">
                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
