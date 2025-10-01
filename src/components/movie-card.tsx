import { useState } from "react";

import {
  Star,
  Play,
  Heart,
  Share2,
  Clock,
  Calendar,
  Bookmark,
  TrendingUp,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Genre {
  id: number;
  tmdb_genre_id: number;
  name: string;
}

interface MovieCardProps {
  title: string;
  year: string;
  genre: Genre[];
  rating: string;
  isSaved: boolean;
  poster: string;
  isLiked?: boolean;
}

export function MovieCard({
  title,
  year,
  genre,
  rating,
  isSaved = false,
  poster,
  isLiked = false,
}: MovieCardProps) {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="movie-card-3d w-xs md:w-[220] ">
      <Card
        className="movie-card-hover relative overflow-hidden bg-gradient-to-br from-card via-card to-muted border-2 border-primary/20 shadow-2xl max-w-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating decorative elements */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full floating-animation animate-pulse opacity-60" />
        <div
          className="absolute top-4 -left-1 w-4 h-4 bg-secondary rounded-full floating-animation opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-8 -right-1 w-6 h-6 bg-primary rounded-full floating-animation opacity-50"
          style={{ animationDelay: "4s" }}
        />

        {/* Poster Section */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={poster || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Rating badge */}
          <div className="absolute top-4 left-4 glass-effect rounded-full px-3 py-1">
            <div className="flex items-center gap-1 text-white">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-sm">{rating}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              size="icon"
              variant="ghost"
              className={`glass-effect rounded-full w-10 h-10 transition-colors justify-center items-center ${
                liked ? "text-blue-400" : "text-white hover:text-red-400"
              }`}
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="glass-effect rounded-full w-10 h-10 text-white hover:text-primary"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Play button overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary text-primary-foreground shadow-2xl"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 bg-orange-500">
          {/* Title and Year */}
          <div className="space-y-2 bg-accent">
            <h3 className="font-bold text-sm gradient-text text-balance leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{year}</span>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {genre.map((g, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-medium"
              >
                {g.name}
              </Badge>
            ))}
          </div>

          {/* Director */}
          {/* <p className="text-sm text-muted-foreground">
            <span className="font-medium">Directed by:</span> {director}
          </p> */}

          {/* Description */}
          {/* <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </p> */}

          {/* Action Button */}
          {/* <Link
          </Link> */}
        </div>
      </Card>
    </div>
    // <Card
    //   className="group relative overflow-hidden glass-card border-white/30 transition-all duration-700 max-w-sm min-w-sm hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)]"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    //   style={{
    //     transform: isHovered ? "translateY(-8px)" : "translateY(0)",
    //   }}
    // >
    //   <div className="relative h-80 overflow-hidden">
    //     <img
    //       src={poster || "/placeholder.svg"}
    //       alt={title}
    //       className="w-full h-full object-cover transition-all duration-700 ease-out"
    //       style={{
    //         transform: isHovered ? "scale(1.1)" : "scale(1)",
    //         filter: isHovered ? "brightness(1.1)" : "brightness(1)",
    //       }}
    //     />

    //     {/* Cinematic gradient overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    //     {/* Trending badge */}
    //     {/* {trending && (
    //       <div className="absolute top-5 left-5 glass-card rounded-full px-4 py-2 flex items-center gap-2 animate-pulse">
    //         <TrendingUp className="w-4 h-4 text-secondary" />
    //         <span className="font-semibold text-sm text-foreground">Trending</span>
    //       </div>
    //     )} */}

    //     {/* Rating badge with glassmorphism */}
    //     <div className="absolute top-5 right-5 glass-card rounded-2xl px-4 py-2.5 backdrop-blur-xl">
    //       <div className="flex items-center gap-2">
    //         <Star className="w-4 h-4 fill-secondary text-secondary drop-shadow-lg" />
    //         <span className="font-bold text-base text-foreground">
    //           {rating}
    //         </span>
    //       </div>
    //     </div>

    //     {/* Bookmark button with glassmorphism */}
    //     <button
    //       onClick={() => setSaved(!saved)}
    //       className="absolute bottom-5 right-5 glass-card rounded-full p-3 backdrop-blur-xl hover:scale-110 transition-all duration-300"
    //     >
    //       <Bookmark
    //         className={`w-5 h-5 transition-all ${
    //           saved
    //             ? "fill-secondary text-secondary scale-110"
    //             : "text-foreground"
    //         }`}
    //       />
    //     </button>

    //     {/* Play button overlay with 3D effect */}
    //     <div
    //       className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
    //         isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
    //       }`}
    //     >
    //       <div className="relative">
    //         {/* Glow effect */}
    //         <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl animate-pulse" />
    //         <Button
    //           size="lg"
    //           className="relative rounded-full w-20 h-20 glass-card backdrop-blur-xl text-foreground border-white/40 hover:scale-110 transition-all duration-300 shadow-2xl"
    //         >
    //           <Play className="w-7 h-7 ml-1 fill-foreground" />
    //         </Button>
    //       </div>
    //     </div>

    //     {/* Bottom info bar with glassmorphism */}
    //     <div className="absolute bottom-5 left-5 glass-card rounded-2xl px-4 py-2 backdrop-blur-xl">
    //       <div className="flex items-center gap-3 text-sm text-foreground">
    //         <Clock className="w-4 h-4" />
    //         <span className="font-medium">{"duration"}</span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="p-7 space-y-5 bg-white/50 backdrop-blur-sm">
    //     {/* Title with dramatic typography */}
    //     <div className="space-y-3">
    //       <h3 className="font-serif text-3xl font-bold text-foreground text-balance leading-tight tracking-tight">
    //         {title}
    //       </h3>
    //       <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
    //         <span>{year}</span>
    //         <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
    //         <span className="text-foreground">{"director"}</span>
    //       </div>
    //     </div>

    //     {/* Genres with colorful badges */}
    //     <div className="flex flex-wrap gap-2">
    //       {genre.map((g, index) => (
    //         <Badge
    //           key={index}
    //           className="glass-card text-foreground border-white/40 font-medium text-xs px-4 py-1.5 hover:scale-105 transition-transform"
    //         >
    //           {g.name}
    //         </Badge>
    //       ))}
    //     </div>

    //     {/* Description */}
    //     <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
    //       {description}
    //     </p>

    //     {/* Action Button with gradient */}
    //     <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-xl py-6 text-base">
    //       Watch Now
    //     </Button>
    //   </div>
    // </Card>
  );
}
