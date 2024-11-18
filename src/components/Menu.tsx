import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const menuItems = [
  {
    category: 'Appetizers',
    items: [
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese with aromatic spices, grilled to perfection',
        price: '$16',
        image: 'https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/09/Farm-Fresh-Delight-Paneer-Tikka-Recipe-with-Pravarsha-Dairys-Fresh-Paneer-Pravarsha-Dairy-scaled.webp'
      },
      {
        name: 'Samosa Platter',
        description: 'Crispy pastries filled with spiced potatoes and green peas, served with mint chutney',
        price: '$14',
        image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      {
        name: 'Dal Makhani',
        description: 'Creamy black lentils simmered overnight with aromatic spices and butter',
        price: '$24',
        image: 'https://resize.indiatv.in/resize/newbucket/1200_-/2023/08/dal-makhni-1691167711.jpg'
      },
      {
        name: 'Malai Soya Chaap',
        description: 'Soya Malai Chaap is a soyabean dish that is cooked in a thick cream and rice flour.',
        price: '$26',
        image: 'https://www.chefkunalkapur.com/wp-content/uploads/2022/06/OZZ_1035-copy-1300x730.jpg?v=1656123611'
      }
    ]
  },
  {
    category: 'Signature Dishes',
    items: [
      {
        name: 'Pav Bhaji',
        description: 'A blend of spicy mashed vegetables served with butter toasted bun',
        price: '$32',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=400&h=300'
      },
      {
        name: 'Vegetable Biryani',
        description: 'Fragrant basmati rice cooked with seasonal vegetables and royal spices',
        price: '$28',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ]
  }
];

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Menu
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the finest Indian vegetarian cuisine, crafted with authentic spices
            and traditional recipes
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuItems.map((section, idx) => (
            <div key={section.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="text-2xl font-semibold text-yellow-500 mb-8"
              >
                {section.category}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (idx * 0.2) + (itemIdx * 0.1) }}
                    className="bg-gray-900 rounded-lg overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-semibold text-white">
                          {item.name}
                        </h4>
                        <span className="text-yellow-500 font-bold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;