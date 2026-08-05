namespace OneBottle.Mappers
{
    using OneBottle.DTOs.Product;
    using OneBottle.Models;

    public static class ProductMappers
    {
        public static ProductDTO ToProductDTO(this Product product)
        {
            return new ProductDTO
            {
                ProductId = product.ProductId,
                Name = product.Name,
                ImageUrl = product.ImageUrl,
                Description = product.Description,
                Rating = product.Rating,
                Brand = product.Brand,
                Weight = product.Weight,
                Sugar = product.Sugar,
                CategoryId = product.CategoryId,
                Price = product.Price,
                StockQuantity = product.StockQuantity,
            };
        }

        public static Product ToProductModelFromCreateProductDTO(this CreateProductDTO productDTO)
        {
            return new Product
            {
                ProductId = Guid.NewGuid(),
                Name = productDTO.Name,
                ImageUrl = productDTO.ImageUrl,
                Description = productDTO.Description,
                Brand = productDTO.Brand,
                Weight = productDTO.Weight,
                Sugar = productDTO.Sugar,
                StockQuantity = productDTO.StockQuantity,
                Price = productDTO.Price,
                CategoryId = productDTO.CategoryId,
                CreatedAt = DateTime.Now,
            };
        }

        public static Product ToProductModelFromUpdateProductDTO(Product product, UpdateProductDTO productDto)
        {
            if (!string.IsNullOrWhiteSpace(productDto.Name))
            {
                product.Name = productDto.Name;
            }
            if (!string.IsNullOrWhiteSpace(productDto.Brand))
            {
                product.Brand= productDto.Brand;
            }
            if (!string.IsNullOrWhiteSpace(productDto.Description))
            {
                product.Description = productDto.Description;
            }
            if (!string.IsNullOrWhiteSpace(productDto.ImageUrl))
            {
                product.ImageUrl= productDto.ImageUrl;
            }
            if (productDto.Weight.HasValue)
            {
                product.Weight= productDto.Weight.Value;
            }
            if (productDto.Price.HasValue)
            {
                product.Price = productDto.Price.Value;
            }
            if (productDto.StockQuantity.HasValue)
            {
                product.StockQuantity = productDto.StockQuantity.Value;
            }
            if (productDto.CategoryId.HasValue)
            {
                product.CategoryId = productDto.CategoryId.Value;
            }
            return product;
        }
    }
}
