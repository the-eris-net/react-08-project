import MovieCard from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/**
 *  modules : Swiper에서 제공하는 추가 기능들을 사용할 때 필요
 * spaceBetween : 각 슬라이드 간의 간격 설정
 * slidesPerView : 한 번에 보여질 슬라이드의 개수 설정
 * autoplay : 자동 재생 기능 설정
 * pagination : 페이지네이션(현재 슬라이드 위치 표시) 기능 설정
 * navigation : 이전/다음 버튼 기능 설정
 */
export default function SwiperMovies({ movies }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
