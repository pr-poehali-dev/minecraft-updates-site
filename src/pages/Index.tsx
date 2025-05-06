
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Diamond, Leaf, Bone, GanttChart, Cpu, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#313338] to-[#1e1f22]">
      <header className="py-6 px-4 md:px-8 lg:px-12 bg-[#1e1f22]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Minecraft 1.22</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-300 hover:text-white">Особенности</a>
            <a href="#mobs" className="text-gray-300 hover:text-white">Мобы</a>
            <a href="#biomes" className="text-gray-300 hover:text-white">Биомы</a>
            <a href="#blocks" className="text-gray-300 hover:text-white">Блоки</a>
          </nav>
          <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
            Официальный сайт <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Обновление Tricky Trials
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Исследуйте новые подземные биомы и встретьтесь с таинственным Хранителем Испытаний в свежем обновлении Minecraft 1.22
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700">Узнать больше</Button>
            <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
              Дата выхода: 2024
            </Button>
          </div>
        </section>

        {/* Features Overview */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ключевые особенности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <GanttChart className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Испытания</CardTitle>
                <CardDescription className="text-gray-400">
                  Новая система подземных испытаний с особыми наградами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Находите и проходите испытания Хранителя, чтобы получить уникальные награды и предметы. Каждое испытание - это уникальная головоломка или боевое испытание.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <Wind className="h-10 w-10 text-blue-400 mb-2" />
                <CardTitle>Новые биомы</CardTitle>
                <CardDescription className="text-gray-400">
                  Исследуйте таинственные подземные локации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Среди новых биомов - Пещера Испытаний и Кристальные гроты, которые скрывают редкие материалы и таинственные структуры для исследования.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <Cpu className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle>Механика испытаний</CardTitle>
                <CardDescription className="text-gray-400">
                  Новая система прогрессии и наград
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Зарабатывайте очки испытаний, открывайте особые сундуки Хранителя и получайте уникальные предметы, включая новые зачарования и инструменты.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mobs Section */}
          <section id="mobs" className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Bone className="mr-2 h-6 w-6 text-red-400" />
                Новые мобы
              </h2>
              <Separator className="my-4 bg-gray-700" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Хранитель испытаний</h3>
                  <p className="text-gray-300 mb-2">Таинственное существо, обитающее в пещерах испытаний. Предлагает игрокам испытания и выдает награды.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Уникальная система диалогов</li>
                    <li>Может быть как враждебным, так и дружелюбным</li>
                    <li>Появляется только в специальных комнатах испытаний</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Кристальный голем</h3>
                  <p className="text-gray-300 mb-2">Защитник кристальных пещер, состоящий из редких минералов.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Высокая защита от физического урона</li>
                    <li>Уязвим к магическим атакам</li>
                    <li>Дропает кристальные осколки</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Подземные светлячки</h3>
                  <p className="text-gray-300 mb-2">Мирные существа, освещающие подземные биомы.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Излучают мягкий свет</li>
                    <li>Могут быть пойманы в бутылку</li>
                    <li>Отпугивают некоторых враждебных мобов</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Biomes Section */}
          <section id="biomes" className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Leaf className="mr-2 h-6 w-6 text-green-400" />
                Новые биомы
              </h2>
              <Separator className="my-4 bg-gray-700" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Пещера испытаний</h3>
                  <p className="text-gray-300 mb-2">Таинственные пещеры с древними механизмами и ловушками.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Содержит комнаты испытаний</li>
                    <li>Уникальные декоративные блоки</li>
                    <li>Появляется на глубоких уровнях</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Кристальные гроты</h3>
                  <p className="text-gray-300 mb-2">Красивые пещеры с растущими кристаллами различных цветов.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Кристаллы могут быть собраны для крафта</li>
                    <li>Естественная генерация света</li>
                    <li>Уникальная фауна и флора</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Каменный лабиринт</h3>
                  <p className="text-gray-300 mb-2">Запутанная система туннелей с редкими ресурсами и опасностями.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Сложная навигация</li>
                    <li>Скрытые комнаты с сокровищами</li>
                    <li>Уникальные структуры генерации</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Blocks Section */}
          <section id="blocks" className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Diamond className="mr-2 h-6 w-6 text-blue-400" />
                Новые блоки и предметы
              </h2>
              <Separator className="my-4 bg-gray-700" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Кристальные блоки</h3>
                  <p className="text-gray-300 mb-2">Блоки, добываемые в кристальных пещерах.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Доступны в 5 различных цветах</li>
                    <li>Излучают слабый свет</li>
                    <li>Можно использовать для декорации</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Древний механизм</h3>
                  <p className="text-gray-300 mb-2">Сложный редстоун механизм для создания автоматизации.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Компактная автоматизация</li>
                    <li>Программируемые функции</li>
                    <li>Взаимодействует с воронками и сундуками</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Амулет испытаний</h3>
                  <p className="text-gray-300 mb-2">Специальный предмет для взаимодействия с Хранителем.</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Активирует скрытые испытания</li>
                    <li>Может хранить очки испытаний</li>
                    <li>Улучшается с каждым пройденным испытанием</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-10 px-4 bg-[#1e1f22] border-t border-gray-800 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Неофициальная информация по Minecraft 1.22</p>
          <p className="text-gray-500 text-sm">
            Minecraft является зарегистрированной торговой маркой Mojang Studios. Этот сайт не является официальным и не связан с Mojang или Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
