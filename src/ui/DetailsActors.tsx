import { type Credits } from "../bll/useCredits"
import { ActorCard } from "./ActorCard"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  credits: Credits[] | []
}

export function DetailsActors(props: Props) {

  return (
    <div>
      <h2
        style={{ paddingTop: "20px" }}
        className="detailsRecomendationTittle" >
        Актеры:
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1, // телефон
          },
          550: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3, // планшет
          },
          1024: {
            slidesPerView: 4, // ПК
          }
        }}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-navigation-size": "20px"
        } as React.CSSProperties}
      >
        {props.credits !== null && props.credits.map(actor => (
          <SwiperSlide key={actor.id}>
            <ActorCard
              name={actor.name}
              img={actor.profile_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}