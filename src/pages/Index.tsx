import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-display text-primary">Букетерия</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                Букеты
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm">
              Заказать букет
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Flower2" className="w-3 h-3 mr-1" />
                    Свежие цветы каждый день
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Цветы, которые
                    <span className="text-primary block">говорят за вас</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Авторские букеты из свежих роз, пионов и сезонных цветов. Соберём композицию под любой
                    повод и доставим в день заказа — с любовью и вниманием к каждой детали.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Выбрать букет
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Доставка сегодня
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/3a518da1-1f3c-49be-a2ff-9c4d80d76c2c.jpg"
                  alt="Букет из роз"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/10 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/c08599c0-679e-491c-b17a-9c9f322e9378.jpg"
                  alt="Цветочный магазин"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/10 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/64e71a94-a514-4198-ab4d-669d5a74cae2.jpg"
                  alt="Сборка букета"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/3a518da1-1f3c-49be-a2ff-9c4d80d76c2c.jpg"
                  alt="Розы крупным планом"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Мы превращаем цветы в эмоции — бережно, красиво и точно в срок
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Свежесть</h3>
              <p className="text-muted-foreground">
                Цветы поступают ежедневно от проверенных поставщиков и стоят в букетах до 10 дней.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Доставка</h3>
              <p className="text-muted-foreground">
                Привезём букет в день заказа по городу за 1–2 часа — бережно и без опозданий.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">С душой</h3>
              <p className="text-muted-foreground">
                Каждый букет флористы собирают вручную и подбирают композицию под ваш повод и настроение.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Каталог букетов */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">ПОПУЛЯРНЫЕ БУКЕТЫ</h2>
            <Button variant="outline">Весь каталог</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/10 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/3a518da1-1f3c-49be-a2ff-9c4d80d76c2c.jpg"
                  alt="Букет «Нежность»"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Хит</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">«Нежность»</h3>
                <p className="text-muted-foreground mb-4">Розовые розы и пионы в стильной упаковке</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="text-2xl font-bold text-primary">3 200 ₽</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Flower" className="w-4 h-4" />
                    25 цветов
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/10 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/64e71a94-a514-4198-ab4d-669d5a74cae2.jpg"
                  alt="Букет «Страсть»"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Новинка
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">«Страсть»</h3>
                <p className="text-muted-foreground mb-4">Алые розы — классика для самых важных моментов</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="text-2xl font-bold text-primary">4 500 ₽</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Flower" className="w-4 h-4" />
                    35 роз
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/10 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/c08599c0-679e-491c-b17a-9c9f322e9378.jpg"
                  alt="Букет «Праздник»"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Сезон
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">«Праздник»</h3>
                <p className="text-muted-foreground mb-4">Яркий микс сезонных цветов в розово-красной гамме</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="text-2xl font-bold text-primary">3 800 ₽</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Flower" className="w-4 h-4" />
                    30 цветов
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Создаём букеты, которые запоминают</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  «Букетерия» — это уютная мастерская цветов, где каждый букет собирается вручную с
                  вниманием к вашему поводу. Мы любим розы и пионы и работаем только со свежими цветами,
                  чтобы ваш подарок радовал как можно дольше.
                </p>
                <p>
                  От нежного комплимента до пышной свадебной композиции — мы подберём цветы, которые
                  точно передадут ваши чувства. И доставим их вовремя.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5 000+</div>
                  <div className="text-muted-foreground">Счастливых клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">1–2 ч</div>
                  <div className="text-muted-foreground">Доставка по городу</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/f8a59be3-0dc4-47a0-a797-5bf40ec994e9/files/c08599c0-679e-491c-b17a-9c9f322e9378.jpg"
                  alt="Интерьер магазина Букетерия"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section id="services" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы подарить цветы?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Выберите готовый букет или закажите авторскую композицию — мы соберём её с любовью
            и привезём по адресу уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Заказать букет
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="MapPin" className="w-4 h-4 mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 font-display text-primary">Букетерия</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Цветочная мастерская, где каждый букет собирается вручную. Свежие розы, пионы
                и сезонные цветы с доставкой по городу.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Садовая, 123</p>
                <p>ТЦ «Весна», 1 этаж</p>
                <p>Ежедневно 8:00 - 21:00</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Букеты на заказ</p>
                <p>Свадебная флористика</p>
                <p>Оформление мероприятий</p>
                <p>Доставка цветов</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Букетерия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;