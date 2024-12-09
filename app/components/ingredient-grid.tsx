import { IngredientItem } from "@/app/page";
import Image from "next/image";

interface IngredientGridProps {
    items: IngredientItem[];
}

export function IngredientGrid({ items }: IngredientGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                    key={item.name}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}