import { Leaf, ChefHat, CookingPot, Truck, Play, MapPin, Clock, Instagram, Quote, ArrowUpRight } from 'lucide-react';
import { BrandImage } from '@/components/brand-image';
import { CTAButton } from '@/components/cta-button';
import { ContentCard } from '@/components/cards';
import { SectionTitle } from '@/components/section-title';
import { photos, videos } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';
import { pageMetadata } from '@/lib/metadata';
import { enjoySteps, homeFeatures, homeProducts, homeReviews, homeReviewState, trustPoints } from '@/lib/home-content';
import styles from './home.module.css';
import { QuickLinks } from '@/components/quick-links';

export const metadata = pageMetadata('홈', siteConfig.description);

export default function Home() {
  const trustIcons = [Leaf, ChefHat, CookingPot, Truck];
  return (
    <main id="main" className={styles.home}>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-photo"><BrandImage photo={photos.hero} priority /></div>
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">FROM GIMHAE, WITH LOVE</span>
            <h1 id="home-title">맛있는 닭갈비가<br />사람을 모으고,<br />좋은 이야기가<br /><em>문화</em>를 만듭니다.</h1>
            <p className={styles.slogan}>약은 약사에게!<br />닭갈비는 두총각에게!</p>
            <div className="hero-actions">
              <CTAButton channel="smartStore" />
              <CTAButton href="/story" variant="text">두총각 이야기 보기</CTAButton>
            </div>
          </div>
          <p className="hero-note">“좋은 맛은<br /><span>좋은 사람들을 만듭니다.”</span></p>
        </div>
      </section>

      <QuickLinks />

      <section className={styles.trust} aria-label="두총각 상품 안내">
        <div className={`container benefits ${styles.trustInner}`}>
          {trustPoints.map((point, index) => {
            const Icon = trustIcons[index];
            return <div key={point.id}><Icon size={29} strokeWidth={1.3} aria-hidden="true" /><p><strong>{point.title}</strong><span>{point.text}</span></p></div>;
          })}
        </div>
      </section>

      <section className={`section ${styles.productsSection}`} aria-label="대표 상품">
        <div className="container">
          <div className="section-heading">
            <SectionTitle eyebrow="OUR SIGNATURE" title="결국, 다시 찾게 되는 맛." description="두총각 닭갈비를 집에서도 만나보세요." />
            <CTAButton href="/dakgalbi" variant="text">닭갈비 더 알아보기</CTAButton>
          </div>
          <p className={styles.pending}>사진은 임시 이미지이며, 정식 상품명·구성·가격은 확정 후 안내합니다.</p>
          <div className={styles.products}>
            {homeProducts.map((product, index) => <article key={product.id}>
              <div className={styles.productImage}><BrandImage photo={product.image} /></div>
              <span className={styles.index}>SIGNATURE / 0{index + 1}</span>
              <h3>{product.name}</h3><p>{product.description}</p>
              <dl className={styles.composition}>
                <div><dt>구성</dt><dd>{product.composition}</dd></div>
                {product.price !== undefined && !product.isPlaceholder && <div><dt>가격</dt><dd>{product.price.toLocaleString('ko-KR')}원</dd></div>}
              </dl>
              {product.smartStoreUrl ? <a className="cta cta-primary" href={product.smartStoreUrl} target="_blank" rel="noopener noreferrer">주문하기<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (새 창)</span></a> : <CTAButton channel="smartStore">주문하기</CTAButton>}
            </article>)}
          </div>
        </div>
      </section>

      <section className={styles.purchase} aria-labelledby="purchase-title">
        <div className={styles.purchaseImage}><BrandImage photo={photos.hero} /></div>
        <div className={styles.purchaseShade} />
        <div className={`container ${styles.purchaseCopy}`}>
          <span className="eyebrow">YOUR TABLE, OUR DAKGALBI</span>
          <h2 id="purchase-title">오늘 저녁 메뉴 고민된다면<br />두총각 닭갈비로 끝내세요.</h2>
          <CTAButton channel="smartStore" />
        </div>
      </section>

      <section className={`section ${styles.why}`} aria-label="두총각의 차별점">
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyImage}><BrandImage photo={photos.food} /></div>
          <div>
            <SectionTitle eyebrow="BEHIND THE TASTE" title="왜 두총각 닭갈비일까요?" description="한 판에 담긴 이야기를 전해드릴게요." />
            <div className={styles.features}>{homeFeatures.map((feature, index) => <article key={feature.id}>
              <span>0{index + 1}</span><div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            </article>)}</div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.reviewSection}`} aria-label="고객 후기">
        <div className="container">
          <SectionTitle center eyebrow="AROUND YOUR TABLE" title="실제로 드셔본 분들의 이야기" />
          {homeReviewState.isPlaceholder || homeReviews.length === 0 ? <div className={styles.reviewEmpty}>
            <Quote size={32} strokeWidth={1.3} aria-hidden="true" />
            <p>{homeReviewState.message}</p><span>맛있는 경험이 모이면, 이곳에서 전해드릴게요.</span>
          </div> : <div className={styles.reviews}>{homeReviews.map(review => <figure key={review.id}><blockquote>{review.text}</blockquote><figcaption>{review.author}</figcaption></figure>)}</div>}
        </div>
      </section>

      <section className={`section ${styles.enjoy}`} aria-label="맛있게 먹는 방법">
        <div className="container">
          <SectionTitle center eyebrow="FROM PAN TO TABLE" title="더 맛있게 즐기는 방법" />
          <ol className={styles.steps}>{enjoySteps.map(step => <li key={step.number}>
            <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
          </li>)}</ol>
          <p className={styles.cookingNote}>정확한 조리 시간과 방법은 구매하신 제품의 표시사항을 따라주세요.</p>
          <div className={styles.recipeLink}><CTAButton href="/content" variant="outline">두총각 레시피 보기</CTAButton></div>
        </div>
      </section>

      <section className={`section ${styles.contentSection}`} aria-label="두총각 콘텐츠">
        <div className="container">
          <div className="section-heading"><SectionTitle eyebrow="BEYOND THE TABLE" title="맛있는 이야기는 계속됩니다." description="주방에서, 매장에서, 우리의 일상에서. 두총각의 또 다른 매력." /><CTAButton href="/content" variant="text">콘텐츠 전체보기</CTAButton></div>
          <div className="channel-heading"><h3><Play size={22} fill="currentColor" aria-hidden="true" /> YouTube <span>두총각의 맛있는 일상</span></h3><CTAButton channel="youtube" variant="text">채널 바로가기</CTAButton></div>
          <div className="video-grid">{videos.slice(0, 3).map(video => <ContentCard key={video.title} content={video} />)}</div>
          <div className="channel-heading instagram-heading"><h3><Instagram size={22} aria-hidden="true" /> Instagram <span>지금, 여기 두총각</span></h3><CTAButton channel="instagram" variant="text">Instagram 바로가기</CTAButton></div>
          <div className="instagram-grid">{[photos.people, photos.food, photos.story, photos.package, photos.store].map((photo, index) => <BrandImage photo={photo} key={index} />)}</div>
        </div>
      </section>

      <section className="story-section" aria-label="두총각 이야기">
        <div className="container story-grid"><BrandImage photo={photos.people} />
          <div className="story-copy"><span className="eyebrow">OUR PEOPLE, OUR STORY</span><h2>우리는 닭갈비를 만들고,<br />함께할 이야기를 만듭니다.</h2><p>맛있는 음식 앞에서는 누구나 가까워지니까.<br />두총각은 오늘도 그 기분 좋은 만남을 준비합니다.</p><p>김해에서 시작된 작은 이야기.<br />음식 너머, 사람과 일상으로 이어집니다.</p><CTAButton href="/story" variant="outline">두총각 이야기 보기</CTAButton></div>
        </div>
      </section>

      <section className="section store-section" aria-label="김해 매장">
        <div className="container store-grid"><div><SectionTitle eyebrow="MEET US IN GIMHAE" title="김해에서 만나요." description="따뜻한 한 판과 반가운 사람들이 기다리는 곳." /><dl className="store-details"><div><dt><MapPin size={20} aria-hidden="true" /> 위치</dt><dd>{siteConfig.store.address || '경상남도 김해 · 상세 주소 안내 예정'}</dd></div><div><dt><Clock size={20} aria-hidden="true" /> 영업시간</dt><dd>{siteConfig.store.hours || '영업시간 안내 준비 중'}</dd></div></dl><div className="flex flex-wrap gap-3"><CTAButton href="/store" variant="outline">매장안내</CTAButton><CTAButton channel="naverPlace" variant="outline">네이버 지도에서 보기</CTAButton></div></div><BrandImage photo={photos.store} /></div>
      </section>

      <section className={`final-cta ${styles.final}`} aria-labelledby="final-title">
        <BrandImage photo={photos.hero} /><div className="final-shade" />
        <div className="container"><span className="eyebrow">MAKE TODAY DELICIOUS</span><h2 id="final-title">오늘은 두총각 닭갈비 어떠세요?</h2><p className={styles.finalSlogan}>약은 약사에게!<br />닭갈비는 두총각에게!</p><CTAButton channel="smartStore" className={styles.finalOrder} /></div>
      </section>
    </main>
  );
}


