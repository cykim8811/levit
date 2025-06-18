
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.png';
import p4 from '@/assets/p4.png';
import logo from '@/assets/logo.png';
import React from 'react';
import { Star } from 'lucide-react';


type ProductCardProps = {
    title?: string;
    price?: string;
    rating?: number;
    reviews?: number;
    image?: string;
    reviewText?: string;
    show?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
    title = '리포데이 올인원 맨즈팩 종합비타민 30개입 1일 ...',
    price = '81,500원',
    rating = 4.5,
    reviews = 1321,
    image = p1,
    show = true,
    reviewText = '리포데이 올인원 맨즈팩 종합비타민 30개입 1일 1회 섭취로 간편하게 건강을 챙길 수 있습니다.',
}) => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 bg-white" style={{ display: show ? 'flex' : 'none' }}>
            <img src={image} className="max-h-32" />
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
            <div className="text-[0.65rem] max-h-18 rounded-lg bg-gray-200 p-2 text-gray-800 mt-2 w-full">
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
    const [state, setState] = React.useState(0);

    return (
        <div className="w-full h-[100dvh] flex flex-col items-center">
            <div className="w-full h-16 border-b border-gray-200 flex flex-col items-center justify-end pb-2 bg-white">
                <img src={logo} className="h-8" alt="Logo" />
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4 p-4 overflow-y-auto">
                <ProductCard title="리포데이 올인원 맨즈팩 종합비타민 30개..." price="81,500원" rating={4.5} reviews={1321} image={p1} reviewText="**부모님 생신**에 선물로 드렸는데, 포장이 고급스러워서... **면역력**에 좋다고 ..." />
                <ProductCard title="대웅제약 임팩타뮨 30p, 40g, 1개" price="19,400원" rating={4.2} reviews={512} image={p2} reviewText="아이가 **수험생**인데, 집중력을 ... 일단 **아침에 늦잠**자는 버릇이 없어져서 ..." />
                <ProductCard title="아임비타 멀티비타민 이뮨샷, 7회분, 2개" price="24,300원" rating={4.0} reviews={890} image={p3} reviewText="**면역력**을 높이기 위해 구매했어요. **비타민C**가 풍부해서 좋네요." />
                <ProductCard title="종근당 칼슘 앤 마그네슘 비타민D 아연..." price="13,510원" rating={4.8} reviews={210} image={p4} reviewText="**골다공증 예방**을 위해 구매했어요. **칼슘**과 **마그네슘**이 함께 들어있어서 ..." />
                <div className="col-span-full h-32 transition-all overflow-hidden duration-500" style={{ maxHeight: state === 0 ? '24rem' : '0', display: state === 0 || state === 1 ? '' : 'none' }}>
                    <p className="text-md text-center mt-4">
                        영양제를 누가 드시나요?
                    </p>
                    <div className="flex flex-row items-center mt-2 mb-32">
                        <div className="flex-1 text-center bg-white border border-gray-200 rounded-lg p-1 m-2 active:bg-gray-100" onClick={() => setState(1)}>
                            본인
                        </div>
                        <div className="flex-1 text-center bg-white border border-gray-200 rounded-lg p-1 m-2 active:bg-gray-100" onClick={() => setState(1)}>
                            선물용
                        </div>
                        <div className="h-12" />
                    </div>
                </div>
                <ProductCard title="리포데이 올인원 맨즈팩 종합비타민 30개..." price="81,500원" rating={4.5} reviews={1321} image={p1} reviewText="**부모님 생신**에 선물로 드렸는데, 포장이 고급스러워서... **면역력**에 좋다고 ..." show={state==1} />
                <ProductCard title="대웅제약 임팩타뮨 30p, 40g, 1개" price="19,400원" rating={4.2} reviews={512} image={p2} reviewText="아이가 **수험생**인데, 집중력을 ... 일단 **아침에 늦잠**자는 버릇이 없어져서 ..." show={state==1} />
                <ProductCard title="아임비타 멀티비타민 이뮨샷, 7회분, 2개" price="24,300원" rating={4.0} reviews={890} image={p3} reviewText="**면역력**을 높이기 위해 구매했어요. **비타민C**가 풍부해서 좋네요." show={state==1} />
                <ProductCard title="종근당 칼슘 앤 마그네슘 비타민D 아연..." price="13,510원" rating={4.8} reviews={210} image={p4} reviewText="**골다공증 예방**을 위해 구매했어요. **칼슘**과 **마그네슘**이 함께 들어있어서 ..." show={state==1} />
                <div className="col-span-full h-32 transition-all overflow-hidden duration-500" style={{ maxHeight: state === 1 ? '24rem' : '0', display: state === 1 || state === 2 ? '' : 'none' }}>
                    <p className="text-md text-center mt-4">
                        영양제의 목적이 무엇인가요?
                    </p>
                    <div className="flex flex-row items-center mt-2 mb-32">
                        <div className="flex-1 text-center bg-white border border-gray-200 rounded-lg p-1 m-2 active:bg-gray-100" onClick={() => setState(2)}>
                            건강 유지
                        </div>
                        <div className="flex-1 text-center bg-white border border-gray-200 rounded-lg p-1 m-2 active:bg-gray-100" onClick={() => setState(2)}>
                            컨디션 관리
                        </div>
                        <div className="h-12" />
                    </div>
                </div>
                <ProductCard title="리포데이 올인원 맨즈팩 종합비타민 30개..." price="81,500원" rating={4.5} reviews={1321} image={p1} reviewText="**부모님 생신**에 선물로 드렸는데, 포장이 고급스러워서... **면역력**에 좋다고 ..." show={state==2} />
                <ProductCard title="대웅제약 임팩타뮨 30p, 40g, 1개" price="19,400원" rating={4.2} reviews={512} image={p2} reviewText="아이가 **수험생**인데, 집중력을 ... 일단 **아침에 늦잠**자는 버릇이 없어져서 ..." show={state==2} />
                <ProductCard title="아임비타 멀티비타민 이뮨샷, 7회분, 2개" price="24,300원" rating={4.0} reviews={890} image={p3} reviewText="**면역력**을 높이기 위해 구매했어요. **비타민C**가 풍부해서 좋네요." show={state==2} />
                <ProductCard title="종근당 칼슘 앤 마그네슘 비타민D 아연..." price="13,510원" rating={4.8} reviews={210} image={p4} reviewText="**골다공증 예방**을 위해 구매했어요. **칼슘**과 **마그네슘**이 함께 들어있어서 ..." show={state==2} />
            </div>
        </div>
    );
};

export default MainView;