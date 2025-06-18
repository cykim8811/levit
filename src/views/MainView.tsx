
import p1 from '@/assets/p1.png';
import React from 'react';
import { Star } from 'lucide-react';


const ProductCard: React.FC = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 bg-white">
            <img src={p1} className="w-full" />
            <div className="text-sm">리포데이 올인원 맨즈팩 종합비타민 30개입 1일 ...</div>
            <div className="text-md mt-1 w-full font-bold">81,500원</div>
            <div className="w-full flex flex-row items-center mt-1">
                <div className="flex flex-row text-sm items-center">
                    <Star size={12} className="text-yellow-500" />
                    <div className="text-xs ml-1">
                        4.5
                    </div>
                </div>
                <div className="text-xs text-gray-500 ml-2">
                    후기 1,321
                </div>
            </div>
        </div>
    );
}

const MainView: React.FC = () => {
    return (
        <div className="w-full h-[100dvh] flex flex-col items-center">
            <div className="w-full h-16 border-b border-gray-200 flex flex-col items-center justify-end pb-2 bg-white">
                플랫폼 이름
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4 p-4 overflow-y-auto">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
            </div>
        </div>
    );
};

export default MainView;