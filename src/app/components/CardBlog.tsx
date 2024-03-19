import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";

import React from "react";

interface CardBlogProps {
  imageUrl: string;
  category: string;
  title: string;
  createdAt: string;
  author: string;
  description: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  author,
  category,
  title,
  createdAt,
  description,
  imageUrl,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
          <Image src={imageUrl} alt="thumbnail" className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outline" className="rounded-sm bg-green-100">
          food
        </Badge>
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light italic">24 Jan 2024 - {author}</p>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
