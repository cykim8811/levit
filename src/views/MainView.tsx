
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import React from 'react';
import { Star } from 'lucide-react';


type ProductCardProps = {
    title?: string;
    price?: string;
    rating?: number;
    reviews?: number;
    image?: string;
    reviewText?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    title = '리포데이 올인원 맨즈팩 종합비타민 30개입 1일 ...',
    price = '81,500원',
    rating = 4.5,
    reviews = 1321,
    image = p1,
    reviewText = '리포데이 올인원 맨즈팩 종합비타민 30개입 1일 1회 섭취로 간편하게 건강을 챙길 수 있습니다.',
}) => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 bg-white">
            <img src={image} className="w-full" />
            <div className="text-sm">{title}</div>
            <div className="text-md mt-1 w-full font-bold">{price}</div>
            <div className="w-full flex flex-row items-center mt-1">
                <div className="flex flex-row text-sm items-center">
                    <Star size={12} className="text-yellow-500" />
                    <div className="text-xs ml-1">
                        {rating}
                    </div>
                </div>
                <div className="text-xs text-gray-500 ml-2">
                    후기 {reviews.toLocaleString()}
                </div>
            </div>
            <div className="text-xs text-gray-500 mt-2 w-full">
                {reviewText
                    ? reviewText.split(/(\*\*.*?\*\*)/g).map((part, idx) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                            <strong key={idx} className="text-bold text-green-700">{part.slice(2, -2)}</strong>
                        ) : (
                            <React.Fragment key={idx}>{part}</React.Fragment>
                        )
                    )
                    : null}
            </div>
        </div>
    );
};

const MainView: React.FC = () => {
    return (
        <div className="w-full h-[100dvh] flex flex-col items-center">
            <div className="w-full h-16 border-b border-gray-200 flex flex-col items-center justify-end pb-2 bg-white">
                플랫폼 이름
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4 p-4 overflow-y-auto">
                <ProductCard title="리포데이 올인원 맨즈팩 종합비타민 30개..." price="81,500원" rating={4.5} reviews={1321} image={p1} reviewText="아이가 **수험생**인데, 집중력을 ... 일단 **아침에 늦잠**자는 버릇이 없어져서 ..." />
                <ProductCard title="대웅제약 임팩타뮨 30p, 40g, 1개" price="19,400원" rating={4.2} reviews={512} image={p2} reviewText="**부모님 생신**에 선물로 드렸는데, **면역력**에 좋다고 하셔서 ..." />
            </div>
        </div>
    );
};

export default MainView;