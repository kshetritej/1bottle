using Microsoft.EntityFrameworkCore;
using OneBottle.Models;

namespace OneBottle.Data
{
	public static class Seeder
	{
		private static readonly Guid BreadId = Guid.Parse("11111111-1111-1111-1111-111111111111");
		private static readonly Guid PastriesId = Guid.Parse("22222222-2222-2222-2222-222222222222");
		private static readonly Guid CakesId = Guid.Parse("33333333-3333-3333-3333-333333333333");
		private static readonly Guid CookiesId = Guid.Parse("44444444-4444-4444-4444-444444444444");
		private static readonly Guid BagelsId = Guid.Parse("55555555-5555-5555-5555-555555555555");

		private static readonly Guid JohnId = Guid.Parse("bbbbbbbb-0000-0000-0000-000000000001");
		private static readonly Guid SarahId = Guid.Parse("bbbbbbbb-0000-0000-0000-000000000002");
		private static readonly Guid MikeId = Guid.Parse("bbbbbbbb-0000-0000-0000-000000000003");

		private static readonly Guid Order1Id = Guid.Parse("ffffffff-0000-0000-0000-000000000001");
		private static readonly Guid Order2Id = Guid.Parse("ffffffff-0000-0000-0000-000000000002");

		public static void Seed(AppDbContext db)
		{
			if (db.Categories.Any()) return;

			var now = DateTime.UtcNow;
			var userPassword = BCrypt.Net.BCrypt.HashPassword("BakeryPass123!");

			var bread = new Category { CategoryId = BreadId, Name = "Bread", Description = "Artisan loaves baked fresh every morning." };
			var pastries = new Category { CategoryId = PastriesId, Name = "Pastries", Description = "Flaky, buttery pastries and sweet treats." };
			var cakes = new Category { CategoryId = CakesId, Name = "Cakes", Description = "Celebration cakes and cupcakes for every occasion." };
			var cookies = new Category { CategoryId = CookiesId, Name = "Cookies", Description = "Chewy, golden cookies straight from the oven." };
			var bagels = new Category { CategoryId = BagelsId, Name = "Bagels", Description = "Kettle-boiled bagels with a perfect chew." };
			db.Categories.AddRange(bread, pastries, cakes, cookies, bagels);
			db.SaveChanges();

			var products = new List<Product>
			{
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000001"),
					Name = "Artisan Sourdough Loaf",
					ImageUrl = "https://images.unsplash.com/photo-1559811814-e2c57b5e69df?q=80&w=1200&auto=format&fit=crop",
					Description = "Slow-fermented, crusty on the outside and soft on the inside. Made with organic flour and a 20-year-old starter.",
					Brand = "The Little Baker", Weight = 700, Sugar = 0, CategoryId = BreadId,
					Price = 6.50m, StockQuantity = 40, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000002"),
					Name = "Classic French Baguette",
					ImageUrl = "https://images.unsplash.com/photo-1554475659-9fd915c8f156?q=80&w=1200&auto=format&fit=crop",
					Description = "Golden, crackly crust with an airy crumb. Baked in small batches all day long.",
					Brand = "The Little Baker", Weight = 350, Sugar = 0, CategoryId = BreadId,
					Price = 3.25m, StockQuantity = 60, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000003"),
					Name = "Rustic Multigrain Loaf",
					ImageUrl = "https://images.unsplash.com/photo-1598373182308-3270495d2f58?q=80&w=1200&auto=format&fit=crop",
					Description = "A hearty blend of oats, rye, flax and sunflower seeds. Sliced and toasted beautifully.",
					Brand = "The Little Baker", Weight = 650, Sugar = 0, CategoryId = BreadId,
					Price = 5.75m, StockQuantity = 35, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000004"),
					Name = "Butter Croissant",
					ImageUrl = "https://images.unsplash.com/photo-1756504919199-cc5ff9d5a3e0?q=80&w=1200&auto=format&fit=crop",
					Description = "36 layers of laminated French butter dough. Flaky, golden and impossibly light.",
					Brand = "The Little Baker", Weight = 90, Sugar = 0, CategoryId = PastriesId,
					Price = 3.50m, StockQuantity = 80, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000005"),
					Name = "Pain au Chocolat",
					ImageUrl = "https://images.unsplash.com/photo-1753826367157-39e96b3c4bd2?q=80&w=1200&auto=format&fit=crop",
					Description = "Buttery laminated pastry wrapped around two batons of dark Belgian chocolate.",
					Brand = "The Little Baker", Weight = 110, Sugar = 0, CategoryId = PastriesId,
					Price = 4.00m, StockQuantity = 50, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000006"),
					Name = "Cinnamon Roll",
					ImageUrl = "https://images.unsplash.com/photo-1756137948744-a26fe254a79f?q=80&w=1200&auto=format&fit=crop",
					Description = "Swirled with Ceylon cinnamon and brown sugar, finished with a cream cheese glaze.",
					Brand = "The Little Baker", Weight = 150, Sugar = 0, CategoryId = PastriesId,
					Price = 4.50m, StockQuantity = 45, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000007"),
					Name = "Homemade Apple Pie",
					ImageUrl = "https://images.unsplash.com/photo-1694505396696-b093cca3d8ea?q=80&w=1200&auto=format&fit=crop",
					Description = "Honeycrisp apples, warm spices and a buttery lattice crust. Best served slightly warm.",
					Brand = "The Little Baker", Weight = 900, Sugar = 0, CategoryId = PastriesId,
					Price = 18.00m, StockQuantity = 12, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000008"),
					Name = "Belgian Chocolate Cake",
					ImageUrl = "https://images.unsplash.com/photo-1572897305554-9b38c937edba?q=80&w=1200&auto=format&fit=crop",
					Description = "Triple-layer moist chocolate cake with silky ganache and a dark chocolate curl.",
					Brand = "The Little Baker", Weight = 1200, Sugar = 0, CategoryId = CakesId,
					Price = 24.00m, StockQuantity = 8, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-000000000009"),
					Name = "Carrot Cake",
					ImageUrl = "https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?q=80&w=1200&auto=format&fit=crop",
					Description = "Grated carrots, toasted walnuts and warm spice, crowned with cream cheese frosting.",
					Brand = "The Little Baker", Weight = 1100, Sugar = 0, CategoryId = CakesId,
					Price = 22.00m, StockQuantity = 10, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-00000000000a"),
					Name = "Blueberry Muffin",
					ImageUrl = "https://images.unsplash.com/photo-1767634480773-37e4b962fa1d?q=80&w=1200&auto=format&fit=crop",
					Description = "Bursting with wild blueberries, topped with a crunchy streusel crumb.",
					Brand = "The Little Baker", Weight = 120, Sugar = 0, CategoryId = CakesId,
					Price = 3.25m, StockQuantity = 55, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-00000000000b"),
					Name = "Chocolate Chip Cookies (Dozen)",
					ImageUrl = "https://images.unsplash.com/photo-1634188023615-7e08901193b6?q=80&w=1200&auto=format&fit=crop",
					Description = "Chewy centers, crisp edges and pools of melted chocolate in every bite.",
					Brand = "The Little Baker", Weight = 450, Sugar = 0, CategoryId = CookiesId,
					Price = 9.50m, StockQuantity = 30, AgeRestriction = 0, Rating = 5, CreatedAt = now, UpdatedAt = now
				},
				new Product
				{
					ProductId = Guid.Parse("aaaaaaaa-0000-0000-0000-00000000000c"),
					Name = "Everything Bagels (Dozen)",
					ImageUrl = "https://images.unsplash.com/photo-1644570920984-09c067a6d07b?q=80&w=1200&auto=format&fit=crop",
					Description = "Kettle-boiled and topped with sesame, poppy, garlic and onion. Chewy perfection.",
					Brand = "The Little Baker", Weight = 700, Sugar = 0, CategoryId = BagelsId,
					Price = 8.00m, StockQuantity = 25, AgeRestriction = 0, Rating = 4, CreatedAt = now, UpdatedAt = now
				}
			};
			db.Products.AddRange(products);
			db.SaveChanges();

			var croissant = products[3];
			var painAuChocolat = products[4];
			var chocolateCake = products[7];
			var applePie = products[6];
			var cookiesProduct = products[10];
			var baguette = products[1];
			var sourdough = products[0];
			var cinnamonRoll = products[5];

			var users = new List<User>
			{
				new User { UserId = JohnId, Username = "john", Password = userPassword, Email = "john@example.com", DateOfBirth = new DateTime(1990, 5, 15), IsAgeVerified = true },
				new User { UserId = SarahId, Username = "sarah", Password = userPassword, Email = "sarah@example.com", DateOfBirth = new DateTime(1992, 8, 22), IsAgeVerified = true },
				new User { UserId = MikeId, Username = "mike", Password = userPassword, Email = "mike@example.com", DateOfBirth = new DateTime(1988, 12, 1), IsAgeVerified = true }
			};
			db.Users.AddRange(users);

			db.Admins.Add(new Admin
			{
				AdminId = Guid.Parse("cccccccc-0000-0000-0000-000000000001"),
				Username = "admin",
				Password = BCrypt.Net.BCrypt.HashPassword("admin123"),
				Email = "admin@thelittlebaker.com"
			});
			db.SaveChanges();

			db.UserProfiles.AddRange(
				new UserProfile { ProfileId = Guid.Parse("dddddddd-0000-0000-0000-000000000001"), Username = "john", DateOfBirth = new DateTime(1990, 5, 15), Address = "12 Maple Street, Sweetwater, AL 12345", PhoneNumber = "(555) 010-1001", IdentificationType = "Driver's License", IdentificationNumber = 123456 },
				new UserProfile { ProfileId = Guid.Parse("dddddddd-0000-0000-0000-000000000002"), Username = "sarah", DateOfBirth = new DateTime(1992, 8, 22), Address = "88 Oak Avenue, Sweetwater, AL 12345", PhoneNumber = "(555) 010-1002", IdentificationType = "Driver's License", IdentificationNumber = 234567 },
				new UserProfile { ProfileId = Guid.Parse("dddddddd-0000-0000-0000-000000000003"), Username = "mike", DateOfBirth = new DateTime(1988, 12, 1), Address = "3 Pine Court, Sweetwater, AL 12345", PhoneNumber = "(555) 010-1003", IdentificationType = "Passport", IdentificationNumber = 345678 }
			);
			db.SaveChanges();

			db.Carts.AddRange(
				new Cart { CartId = Guid.Parse("eeeeeeee-0000-0000-0000-000000000001"), UserId = JohnId, ProductId = sourdough.ProductId, Quantity = 2 },
				new Cart { CartId = Guid.Parse("eeeeeeee-0000-0000-0000-000000000002"), UserId = SarahId, ProductId = cinnamonRoll.ProductId, Quantity = 4 }
			);
			db.SaveChanges();

			db.Orders.AddRange(
				new Order
				{
					OrderId = Order1Id, UserId = JohnId,
					ProductId = new[] { croissant.ProductId, chocolateCake.ProductId }, Product = croissant,
					OrderDate = now.AddDays(-3), TotalPrice = 31.00m,
					OrderStatus = "Delivered",
					ShippingAddress = "12 Maple Street, Sweetwater, AL 12345",
					BillingAddress = "12 Maple Street, Sweetwater, AL 12345"
				},
				new Order
				{
					OrderId = Order2Id, UserId = SarahId,
					ProductId = new[] { applePie.ProductId, cookiesProduct.ProductId, baguette.ProductId }, Product = applePie,
					OrderDate = now.AddDays(-1), TotalPrice = 34.00m,
					OrderStatus = "Shipped",
					ShippingAddress = "88 Oak Avenue, Sweetwater, AL 12345",
					BillingAddress = "88 Oak Avenue, Sweetwater, AL 12345"
				}
			);
			db.SaveChanges();

			db.OrderItems.AddRange(
				new OrderItem { OrderItemId = Guid.Parse("11111111-0000-0000-0000-000000000001"), OrderId = Order1Id, ProductId = croissant.ProductId, Quantity = 2, Price = croissant.Price },
				new OrderItem { OrderItemId = Guid.Parse("11111111-0000-0000-0000-000000000002"), OrderId = Order1Id, ProductId = chocolateCake.ProductId, Quantity = 1, Price = chocolateCake.Price },
				new OrderItem { OrderItemId = Guid.Parse("11111111-0000-0000-0000-000000000003"), OrderId = Order2Id, ProductId = applePie.ProductId, Quantity = 1, Price = applePie.Price },
				new OrderItem { OrderItemId = Guid.Parse("11111111-0000-0000-0000-000000000004"), OrderId = Order2Id, ProductId = cookiesProduct.ProductId, Quantity = 1, Price = cookiesProduct.Price },
				new OrderItem { OrderItemId = Guid.Parse("11111111-0000-0000-0000-000000000005"), OrderId = Order2Id, ProductId = baguette.ProductId, Quantity = 2, Price = baguette.Price }
			);
			db.SaveChanges();

			db.Feedbacks.AddRange(
				new Feedback { FeedbackId = Guid.Parse("22222222-0000-0000-0000-000000000001"), UserId = JohnId, ProductId = croissant.ProductId, Rating = 5, Comment = "Flakiest croissant I've had outside Paris. Absolutely delicious!", Date = now.AddDays(-2) },
				new Feedback { FeedbackId = Guid.Parse("22222222-0000-0000-0000-000000000002"), UserId = SarahId, ProductId = chocolateCake.ProductId, Rating = 5, Comment = "Rich, moist, and the ganache is perfect. Will order again!", Date = now.AddDays(-2) },
				new Feedback { FeedbackId = Guid.Parse("22222222-0000-0000-0000-000000000003"), UserId = MikeId, ProductId = sourdough.ProductId, Rating = 4, Comment = "Great crust and crumb. A little pricey, but worth it.", Date = now.AddDays(-1) },
				new Feedback { FeedbackId = Guid.Parse("22222222-0000-0000-0000-000000000004"), UserId = JohnId, ProductId = applePie.ProductId, Rating = 4, Comment = "Homemade taste with a buttery lattice crust. Delicious!", Date = now.AddDays(-1) },
				new Feedback { FeedbackId = Guid.Parse("22222222-0000-0000-0000-000000000005"), UserId = SarahId, ProductId = cinnamonRoll.ProductId, Rating = 5, Comment = "Soft, gooey, and generously iced. Dangerous to keep around.", Date = now.AddHours(-6) }
			);
			db.SaveChanges();

			db.Notifications.AddRange(
				new Notification { NotificationId = Guid.Parse("33333333-0000-0000-0000-000000000001"), NotificationType = NotificationType.Personal, NotificationContext = NotificationContext.OrderDelivered, NotificationTitle = "Order Delivered", NotificationContent = "Your order has arrived. Enjoy your treats!", NotificationDate = now.AddDays(-2), UserId = JohnId },
				new Notification { NotificationId = Guid.Parse("33333333-0000-0000-0000-000000000002"), NotificationType = NotificationType.Personal, NotificationContext = NotificationContext.OrderShipped, NotificationTitle = "Order Shipped", NotificationContent = "Your fresh bakes are on their way!", NotificationDate = now.AddDays(-1), UserId = SarahId },
				new Notification { NotificationId = Guid.Parse("33333333-0000-0000-0000-000000000003"), NotificationType = NotificationType.Promotional, NotificationContext = NotificationContext.OrderPlaced, NotificationTitle = "Fresh Batch Alert", NotificationContent = "Sourdough is fresh out of the oven. Grab it while it's warm!", NotificationDate = now },
				new Notification { NotificationId = Guid.Parse("33333333-0000-0000-0000-000000000004"), NotificationType = NotificationType.Personal, NotificationContext = NotificationContext.OrderPlaced, NotificationTitle = "Order Confirmed", NotificationContent = "Thanks for your order - we're preheating the oven!", NotificationDate = now, UserId = JohnId }
			);
			db.SaveChanges();
		}
	}
}
