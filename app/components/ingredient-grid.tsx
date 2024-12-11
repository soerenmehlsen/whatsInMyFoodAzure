import { IngredientItem } from "@/app/page";
import { motion } from "framer-motion";
import { useState } from "react";

interface IngredientGridProps {
    items: IngredientItem[];
}

export function IngredientGrid({ items }: IngredientGridProps) {
    
    const [expandItem, setExpandItem] = useState<string | null>(null);
    
    const handleExpand = (itemName: string) => {
        setExpandItem(expandItem === itemName ? null : itemName)};
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <motion.div
                    key={item.name}
                    layout
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`bg-white rounded-lg shadow-md overflow-hidden ${
                        expandItem === item.name ? "shadow-lg" : "shadow-md"
                    }`}
                    
                    onClick={() => handleExpand(item.name)}
                >
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: expandItem === item.name ? 1 : 0.7 }}
                            className={`text-sm text-gray-500 ${expandItem === item.name ? 'line-clamp-none' : 'line-clamp-2'}`}>
                            {item.description}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}