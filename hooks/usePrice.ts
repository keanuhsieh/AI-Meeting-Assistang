
import { useState, useEffect } from 'react';

const usePrice = () => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                // 呼叫 Netlify Function
                const response = await fetch('/.netlify/functions/get-price');
                if (!response.ok) return;
                
                const data = await response.json();
                if (data.price) {
                    setPrice(data.price);
                }
            } catch (error) {
                // 發生錯誤時不做任何處理，讓 UI 維持預設文案 (優雅降級)
                console.warn('Failed to fetch dynamic price:', error);
            }
        };

        fetchPrice();
    }, []);

    return price;
};

export default usePrice;
