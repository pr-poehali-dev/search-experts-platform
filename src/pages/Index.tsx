import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    { name: "Дизайн", icon: "Palette", count: "2,341", color: "bg-primary" },
    { name: "Программирование", icon: "Code", count: "1,856", color: "bg-secondary" },
    { name: "Маркетинг", icon: "Target", count: "1,234", color: "bg-tertiary" },
    { name: "Копирайтинг", icon: "PenTool", count: "987", color: "bg-primary" },
    { name: "Переводы", icon: "Languages", count: "756", color: "bg-secondary" },
    { name: "Видеомонтаж", icon: "Video", count: "643", color: "bg-tertiary" }
  ];

  const topSpecialists = [
    {
      name: "Анна Иванова",
      specialty: "UI/UX Дизайнер",
      rating: 4.9,
      reviews: 156,
      price: "от 3000 ₽",
      avatar: "AI",
      image: "/img/6eaaad4d-988b-4929-ac54-b7a25dae4ac3.jpg"
    },
    {
      name: "Дмитрий Петров",
      specialty: "React разработчик",
      rating: 4.8,
      reviews: 98,
      price: "от 2500 ₽",
      avatar: "ДП",
      image: "/img/1cbfc0c6-f72d-444e-ba80-aeae06d434eb.jpg"
    },
    {
      name: "Мария Сидорова",
      specialty: "SMM специалист",
      rating: 4.9,
      reviews: 203,
      price: "от 1500 ₽",
      avatar: "МС",
      image: "/img/2b51cadb-d737-4d82-99a0-c0b8e1edade3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-friendly">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Handshake" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-tertiary">СпецПоиск</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-tertiary border-tertiary hover:bg-tertiary hover:text-white">
                Войти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-tertiary mb-6 animate-fade-in">
            Найдите идеального специалиста
            <br />
            <span className="text-primary">для вашего проекта</span>
          </h1>
          <p className="text-xl text-tertiary/80 mb-10 max-w-3xl mx-auto">
            Тысячи профессионалов готовы помочь вам воплотить идеи в жизнь. 
            Безопасные сделки, проверенные отзывы, гарантия качества.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex-1">
                <Input
                  placeholder="Что нужно сделать? Например: создать логотип"
                  className="h-12 text-lg border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Категория услуг"
                  className="h-12 text-lg border-0 focus:ring-2 focus:ring-secondary"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-tertiary/70">Специалистов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50,000+</div>
              <div className="text-tertiary/70">Выполненных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tertiary mb-2">4.8</div>
              <div className="text-tertiary/70">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-tertiary mb-12">
            Популярные категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${category.color} rounded-full p-3`}>
                      <Icon name={category.icon as any} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tertiary text-lg">{category.name}</h3>
                      <p className="text-tertiary/60">{category.count} специалистов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Specialists */}
      <section className="py-16 bg-friendly">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-tertiary mb-12">
            Топ специалисты недели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topSpecialists.map((specialist, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={specialist.image} alt={specialist.name} />
                    <AvatarFallback className="bg-primary text-white text-lg font-semibold">
                      {specialist.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-tertiary">{specialist.name}</CardTitle>
                  <CardDescription className="text-lg">{specialist.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-1">
                    <Icon name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{specialist.rating}</span>
                    <span className="text-gray-500">({specialist.reviews} отзывов)</span>
                  </div>
                  <div className="text-xl font-bold text-primary">{specialist.price}</div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-tertiary mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-tertiary mb-2">1. Опишите задачу</h3>
              <p className="text-tertiary/70">Расскажите, что нужно сделать и в какие сроки</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-tertiary mb-2">2. Выберите специалиста</h3>
              <p className="text-tertiary/70">Изучите портфолио и отзывы, выберите лучшего</p>
            </div>
            <div className="text-center">
              <div className="bg-tertiary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-tertiary mb-2">3. Работайте вместе</h3>
              <p className="text-tertiary/70">Общайтесь в удобном чате и отслеживайте прогресс</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-tertiary mb-2">4. Получите результат</h3>
              <p className="text-tertiary/70">Примите работу и оставьте отзыв</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готовы начать свой проект?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Присоединяйтесь к тысячам довольных заказчиков и найдите своего специалиста уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Найти специалиста
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Стать исполнителем
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tertiary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Handshake" className="h-6 w-6" />
                <span className="text-xl font-bold">СпецПоиск</span>
              </div>
              <p className="text-white/70">
                Надежная биржа услуг для поиска профессиональных специалистов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для заказчиков</h4>
              <ul className="space-y-2 text-white/70">
                <li>Как разместить заказ</li>
                <li>Гарантии безопасности</li>
                <li>Часто задаваемые вопросы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для исполнителей</h4>
              <ul className="space-y-2 text-white/70">
                <li>Регистрация специалиста</li>
                <li>Правила работы</li>
                <li>Центр поддержки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>support@specpoisk.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            © 2024 СпецПоиск. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;