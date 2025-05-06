
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink, Scroll, Bug, Rocket, Hammer, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Шапка */}
      <header className="bg-[#252525] py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Minecraft</h1>
            <span className="ml-2 px-2 py-1 bg-[#d1bb5f] text-[#252525] text-xs font-bold rounded">1.21.72</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#changelog" className="text-gray-300 hover:text-white">Список изменений</a>
            <a href="#bugfixes" className="text-gray-300 hover:text-white">Исправления</a>
            <a href="#tech" className="text-gray-300 hover:text-white">Технические изменения</a>
          </nav>
          <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
            Скачать <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Главная информация */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-6">
            <Rocket className="h-8 w-8 text-[#d1bb5f] mr-3" />
            <h1 className="text-3xl font-bold text-[#252525]">Minecraft 1.21.72 - Информация о релизе</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Это обновление включает важные исправления ошибок, улучшения производительности и технические обновления для Java Edition. 
              Релиз 1.21.72 направлен на повышение стабильности игры и подготовку к будущим обновлениям контента.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 my-6">
              <Card className="flex-1 border-l-4 border-l-[#d1bb5f]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Дата релиза</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">12 мая 2024 г.</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 border-l-4 border-l-[#d1bb5f]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Тип обновления</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Исправление ошибок и технические улучшения</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 border-l-4 border-l-[#d1bb5f]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Платформа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Java Edition</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-[#fffceb] p-4 border-l-4 border-[#d1bb5f] rounded mb-6">
              <p className="font-medium text-gray-800">
                Рекомендуется всем игрокам обновиться до данной версии для получения наилучшего игрового опыта.
              </p>
            </div>
          </div>
        </section>

        {/* Список изменений */}
        <section id="changelog" className="mb-12">
          <div className="flex items-center mb-6">
            <Scroll className="h-7 w-7 text-[#d1bb5f] mr-3" />
            <h2 className="text-2xl font-bold text-[#252525]">Список изменений</h2>
          </div>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#252525]">Производительность</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Улучшена производительность рендеринга при большом количестве сущностей на экране</li>
                    <li>Оптимизирована загрузка чанков при быстром передвижении</li>
                    <li>Снижено использование памяти при генерации новых биомов</li>
                    <li>Улучшена загрузка текстур высокого разрешения</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#252525]">Игровой процесс</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Исправлен баланс атак в ближнем бою</li>
                    <li>Улучшена система спавна мобов в новых биомах</li>
                    <li>Обновлены звуки окружения для различных биомов</li>
                    <li>Исправлено поведение деревенских жителей при торговле</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#252525]">Генерация мира</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Улучшена генерация рек и водоемов</li>
                    <li>Исправлены ошибки с генерацией структур на границах биомов</li>
                    <li>Оптимизирована генерация пещер и подземных структур</li>
                    <li>Улучшена плавность перехода между биомами</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Исправления ошибок */}
        <section id="bugfixes" className="mb-12">
          <div className="flex items-center mb-6">
            <Bug className="h-7 w-7 text-[#d1bb5f] mr-3" />
            <h2 className="text-2xl font-bold text-[#252525]">Исправления ошибок</h2>
          </div>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#252525] border-b border-gray-200 pb-2">Критические исправления</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-mono text-red-600 mr-2">MC-254873</span>
                      <p className="text-gray-700">Исправлен краш при переходе между измерениями с большим количеством сущностей</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-red-600 mr-2">MC-255011</span>
                      <p className="text-gray-700">Исправлена проблема с потерей данных инвентаря при неожиданном выходе из игры</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-red-600 mr-2">MC-254990</span>
                      <p className="text-gray-700">Исправлена ошибка с бесконечной загрузкой мира</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-red-600 mr-2">MC-255124</span>
                      <p className="text-gray-700">Исправлен критический баг с невидимыми блоками воды</p>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#252525] border-b border-gray-200 pb-2">Общие исправления</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-mono text-blue-600 mr-2">MC-254321</span>
                      <p className="text-gray-700">Исправлены текстуры некоторых блоков в режиме высокого разрешения</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-blue-600 mr-2">MC-254456</span>
                      <p className="text-gray-700">Исправлено наложение прозрачных текстур в некоторых ситуациях</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-blue-600 mr-2">MC-254632</span>
                      <p className="text-gray-700">Исправлены проблемы с анимацией некоторых мобов</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-blue-600 mr-2">MC-254701</span>
                      <p className="text-gray-700">Исправлены проблемы с отображением частиц некоторых эффектов</p>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-blue-600 mr-2">MC-254830</span>
                      <p className="text-gray-700">Исправлено поведение ИИ деревенских жителей в определенных ситуациях</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Технические изменения */}
        <section id="tech" className="mb-12">
          <div className="flex items-center mb-6">
            <Hammer className="h-7 w-7 text-[#d1bb5f] mr-3" />
            <h2 className="text-2xl font-bold text-[#252525]">Технические изменения</h2>
          </div>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#252525]">API и команды</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Обновлен интерфейс DataPack API для лучшей интеграции с пользовательскими пакетами данных</li>
                    <li>Добавлены новые возможности NBT тегов для более гибкого взаимодействия с игровыми объектами</li>
                    <li>Улучшена работа команды /execute для лучшего контроля над последовательностью выполнения</li>
                    <li>Расширены возможности селекторов для более точного выбора игроков и сущностей</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#252525]">Серверные улучшения</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Улучшена многопоточная обработка для серверов с большим количеством игроков</li>
                    <li>Оптимизировано использование сетевых ресурсов при синхронизации игровых данных</li>
                    <li>Улучшена работа с системой тиков для уменьшения задержек</li>
                    <li>Исправлены проблемы с синхронизацией событий между клиентами и сервером</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
                  <h4 className="font-mono text-sm font-bold mb-2 text-gray-800">Пример изменения в JSON структуре:</h4>
                  <pre className="bg-gray-800 text-gray-200 p-3 rounded text-xs overflow-x-auto">
{`{
  "variants": {
    "extended=false,facing=east": {
      "model": "minecraft:block/piston",
      "y": 90
    },
    "extended=true,facing=east": {
      "model": "minecraft:block/piston_extended",
      "y": 90
    },
    ...
  }
}`}
                  </pre>
                  <p className="text-sm text-gray-600 mt-2">Обновленная структура позволяет более гибко определять варианты моделей.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Безопасность */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="h-7 w-7 text-[#d1bb5f] mr-3" />
            <h2 className="text-2xl font-bold text-[#252525]">Безопасность</h2>
          </div>
          
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Обновление 1.21.72 включает ряд важных исправлений безопасности, которые защищают игроков и серверы от возможных эксплойтов.
              </p>
              
              <div className="bg-red-50 p-4 border-l-4 border-red-500 rounded mb-6">
                <h3 className="text-lg font-semibold text-red-700 mb-2">Важно для владельцев серверов</h3>
                <p className="text-gray-800">
                  Настоятельно рекомендуется обновить серверное программное обеспечение до версии 1.21.72 как можно скорее для защиты от известных уязвимостей.
                </p>
              </div>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Исправлена уязвимость сетевого протокола, которая могла приводить к удаленному выполнению кода</li>
                <li>Устранены проблемы с аутентификацией, которые могли использоваться для несанкционированного доступа</li>
                <li>Улучшена защита от DDoS-атак для выделенных серверов</li>
                <li>Исправлены потенциальные проблемы с проверкой NBT данных от клиентов</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-[#252525] py-8 px-4 text-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-white mb-2">Minecraft 1.21.72</h2>
              <p className="text-sm">Релиз от 12 мая 2024</p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                Скачать лаунчер
              </Button>
              <Button className="bg-[#d1bb5f] text-[#252525] hover:bg-[#c0aa4e]">
                Официальный сайт <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Separator className="bg-gray-700 mb-6" />
          
          <div className="text-sm text-center">
            <p>© 2024 Mojang AB. Все права защищены. Minecraft и Mojang являются товарными знаками Mojang AB.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
