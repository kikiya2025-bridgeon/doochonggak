import { ArrowUpRight, ChefHat, CookingPot, Heart, Leaf, PackageCheck, Quote } from 'lucide-react';
import { BrandImage } from '@/components/brand-image';
import { CTAButton } from '@/components/cta-button';
import { SectionTitle } from '@/components/section-title';
import { photos } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
import { products, type DakgalbiProduct } from '@/lib/dakgalbi/products';
import { cookingSteps, features, recipes, reviews, reviewState } from '@/lib/dakgalbi/content';
import styles from './dakgalbi.module.css';

export const metadata = pageMetadata(
  '두총각 닭갈비',
  '약은 약사에게! 닭갈비는 두총각에게! 집에서 즐기는 두총각 닭갈비와 맛있게 먹는 방법을 만나보세요.',
);

function ProductOrder({ product }: { product: DakgalbiProduct }) {
  // The shared CTA handles an unset URL; configured product destinations stay external.
  return product.smartStoreUrl ? (
    <a className={`cta cta-primary ${styles.order}`} href={product.smartStoreUrl} target="_blank" rel="noopener noreferrer">
      스마트스토어에서 주문하기 <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (새 창)</span>
    </a>
  ) : <CTAButton channel="smartStore" className={styles.order} />;
}

export default function DakgalbiPage() {
  const featureIcons = [Leaf, Heart, ChefHat, PackageCheck];

  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="dakgalbi-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">YOUR TABLE, OUR DAKGALBI</span>
            <h1 id="dakgalbi-title">약은 약사에게!<br /><strong>닭갈비는<br className={styles.desktopBreak} /> 두총각에게!</strong></h1>
            <p>줄서서 먹던 두총각 닭갈비를<br />집에서도 간편하게 즐겨보세요.</p>
            <CTAButton channel="smartStore" className={styles.order} />
          </div>
          <div className={styles.heroImage}>
            <BrandImage photo={photos.hero} priority />
            <span className={styles.photoLabel}>한 판 가득, 두총각 닭갈비</span>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="products-title">
        <div className="container">
          <div id="products-title"><SectionTitle eyebrow="OUR SIGNATURE" title="두총각 대표 닭갈비" description="우리 집 식탁에서 만날 두총각의 한 판." /></div>
          <p className={styles.pending}>메뉴 사진은 임시 이미지입니다. 정식 상품명·구성·가격은 확정 후 안내합니다.</p>
          <div className={styles.products}>
            {products.map((product, index) => (
              <article key={product.id} className={styles.product}>
                <div className={styles.productImage}><BrandImage photo={product.image} /></div>
                <span className={styles.index}>SIGNATURE / 0{index + 1}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <dl className={styles.composition}>
                  <div><dt>구성</dt><dd>{product.composition}</dd></div>
                  {product.price !== undefined && !product.isPlaceholder && (
                    <div><dt>가격</dt><dd>{product.price.toLocaleString('ko-KR')}원</dd></div>
                  )}
                </dl>
                <ProductOrder product={product} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.why}`} aria-labelledby="why-title">
        <div className={`container ${styles.whyGrid}`}>
          <div id="why-title"><SectionTitle eyebrow="THE STORY BEHIND A PLATE" title="왜 두총각 닭갈비일까요?" description="한 판에 담긴 이야기를 차근차근 전해드릴게요." /></div>
          <div className={styles.features}>
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return <article key={feature.id}>
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <h3>{feature.title}</h3><p>{feature.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cooking-title">
        <div className="container">
          <div id="cooking-title"><SectionTitle center eyebrow="FROM PAN TO TABLE" title="더 맛있게 즐기는 방법" description="팬에서 식탁까지. 함께 만들어 더 즐거운 한 끼." /></div>
          <ol className={styles.steps}>
            {cookingSteps.map(step => <li key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </li>)}
          </ol>
          <p className={styles.cookingNote}>기본적인 조리 흐름 안내입니다. 정확한 조리 시간과 방법은 구매하신 제품의 표시사항을 따라주세요.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.recipeSection}`} aria-labelledby="recipes-title">
        <div className="container">
          <div id="recipes-title"><SectionTitle eyebrow="ONE DAKGALBI, MORE POSSIBILITIES" title="닭갈비, 이렇게도 즐겨보세요." description="익숙한 한 판에 더하는, 취향대로의 즐거움." /></div>
          <div className={styles.recipes}>
            {recipes.map((recipe, index) => <article key={recipe.id}>
              <div className={styles.recipeImage}>
                {recipe.image ? <BrandImage photo={recipe.image} /> : <div className={styles.recipePlaceholder}><CookingPot size={32} strokeWidth={1.2} aria-hidden="true" /><span>레시피 사진 준비 중</span></div>}
              </div>
              <span className={styles.index}>IDEA / 0{index + 1}</span>
              <h3>{recipe.name}</h3><p>{recipe.description}</p>
            </article>)}
          </div>
          <div className={styles.recipeLink}><CTAButton href="/content" variant="outline">두총각 콘텐츠 더 보기</CTAButton></div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="reviews-title">
        <div className="container">
          <div id="reviews-title"><SectionTitle center eyebrow="AROUND YOUR TABLE" title="두총각을 드셔본 분들의 이야기" /></div>
          {reviewState.isPlaceholder || reviews.length === 0 ? (
            <div className={styles.reviewEmpty}>
              <Quote size={32} strokeWidth={1.3} aria-hidden="true" />
              <p>{reviewState.message}</p><span>맛있는 경험이 모이면, 이곳에서 전해드릴게요.</span>
            </div>
          ) : <div className={styles.reviews}>{reviews.map(review => <figure key={review.id}><blockquote>{review.text}</blockquote><figcaption>{review.author}</figcaption></figure>)}</div>}
        </div>
      </section>

      <section className={styles.final} aria-labelledby="final-title">
        <div className={styles.finalImage}><BrandImage photo={photos.hero} /></div>
        <div className={styles.finalShade} />
        <div className={`container ${styles.finalCopy}`}>
          <span className="eyebrow">MAKE TONIGHT DELICIOUS</span>
          <h2 id="final-title">오늘 저녁,<br />두총각 닭갈비 어떠세요?</h2>
          <p>좋아하는 사람과, 좋아하는 한 판.</p>
          <CTAButton channel="smartStore" className={styles.finalOrder}>네이버 스마트스토어에서 주문하기</CTAButton>
        </div>
      </section>
    </main>
  );
}
