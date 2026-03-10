import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../components/contact-form";

export default function Home() {
  return (
    <main className="w-full min-h-screen text-center relative">
      {/* HEADER */}
      <header className="py-16 px-8 relative z-10">
        <div className="max-w-[680px] mx-auto flex justify-between items-center sm:block relative">
          <span className="text-xs text-[color:var(--color-faint)] tracking-[0.2em] uppercase">
            Евгений Левчук
          </span>
        </div>
      </header>

      {/* BLOCK 1: HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 relative -mt-32">
        <div className="w-full max-w-[1200px] lg:w-max">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 font-serif text-[color:var(--color-fg)] md:whitespace-nowrap">
            Наконец-то без лишнего шума.
          </h1>

          <div className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light mb-16 space-y-3 leading-relaxed md:whitespace-nowrap">
            <p>Ты устал от советов, техник и мотивации?</p>
            <p>Я работаю иначе - медленно, внимательно, без готовых ответов.</p>
            <p>Только честная работа с тем, что есть.</p>
          </div>

          <div className="mt-8 flex flex-col items-start md:items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase hover:opacity-50 transition-opacity text-[color:var(--color-fg)]"
            >
              Написать Евгению <ArrowRight size={16} />
            </a>
            <p className="text-xs tracking-wide text-[color:var(--color-faint)] mt-6 font-medium">
              Telegram · WhatsApp · первый разговор ни к чему не обязывает
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 2: УЗНАВАНИЕ */}
      <section className="py-32 px-8">
        <div className="max-w-[680px] mx-auto">
          <div className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light leading-relaxed space-y-4">
            <p>Ты ждёшь правильного момента.</p>
            <p>Нужной книги. Нужного человека.</p>
            <p>Того самого щелчка.</p>
            <p className="pt-8 text-[color:var(--color-fg)] font-normal">Я его не обещаю.</p>
            <p className="pt-2">
              Я создаю место, где можно наконец сказать себе правду -<br />
              без спешки и без чужих ожиданий.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 3: О СЕБЕ */}
      <section className="py-32 px-8 bg-[color:var(--color-alt)] transition-colors duration-400">
        <div className="max-w-[680px] mx-auto text-left">
          <span className="text-xs tracking-widest uppercase text-[color:var(--color-faint)] font-semibold mb-6 block">Кто я</span>
          <h2 className="text-4xl md:text-5xl mb-12 font-serif tracking-tight text-[color:var(--color-fg)]">Меня зовут Евгений.</h2>

          <div className="text-lg md:text-xl text-[color:var(--color-muted)] font-light leading-relaxed space-y-8">
            <p>
              Я родился и вырос в Казахстане. Учился на журналиста и с детства замечал то, что другие пропускали. Умею говорить просто о сложном - и это стало основой всего, что я делаю.
            </p>
            <p>
              Психология и коучинг захватили меня сразу: всё, что я интуитивно чувствовал про людей, вдруг обрело форму и язык. С 2011 года работаю лично, с 2016 - с группами и командами.
              В основе моего подхода - интегративная психотерапия, психосоматика, экспресс-психотерапия и трансперсональное направление. Не один инструмент, а система - собранная под каждого конкретного человека.
            </p>
            <p>
              За 15 лет практики прошёл путь через Италию, Румынию и несколько корпоративных проектов в Казахстане. Работал с руководителями, врачами, музыкантами, финансистами, маркетологами - с теми, кто хочет не просто измениться, а понять, как именно они устроены.
            </p>
            <p className="text-[color:var(--color-fg)] font-normal">
              Вижу системы. Понимаю коммуникации. Помогаю людям настроить собственные фильтры восприятия - чтобы принимать решения из ясности, а не из шума.
            </p>
          </div>

          <div className="mt-16 bg-[color:var(--color-panel)] p-8 md:p-12 border border-[color:var(--color-line)] rounded-sm transition-colors duration-400">
            <p className="font-serif text-xl md:text-2xl text-[color:var(--color-muted)]">
              Всё начинается с доверия.<br />
              Не как принцип - как условие.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 4: МОЯ РОЛЬ */}
      <section className="py-32 px-8">
        <div className="max-w-[680px] mx-auto text-left">
          <span className="text-xs tracking-widest uppercase text-[color:var(--color-faint)] font-semibold mb-6 block">Моя роль</span>
          <h2 className="text-4xl md:text-5xl mb-12 font-serif tracking-tight text-[color:var(--color-fg)]">Я иду рядом. Не впереди.</h2>

          <div className="text-lg md:text-xl text-[color:var(--color-muted)] font-light leading-relaxed space-y-4">
            <p>Самое важное в нашей работе случается тихо.</p>
            <p>Человек говорит что-то - и вдруг останавливается.</p>
            <p>Потому что впервые произносит это вслух.</p>
            <p>Именно в этот момент что-то меняется.</p>
            <p className="pt-6">Я не знаю, где этот момент будет у тебя.</p>
            <p>Но я умею создавать пространство, где он становится возможным.</p>
            <p className="pt-6 text-[color:var(--color-fg)] font-normal">Это твой путь. Я рядом.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 5: ПРОЦЕСС */}
      <section className="py-32 px-8 border-t border-[color:var(--color-line)]">
        <div className="max-w-[680px] mx-auto text-left">
          <h2 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight text-[color:var(--color-fg)]">Не этапы. Движение - у каждого своё.</h2>

          <div className="mt-16 space-y-16">
            <ProcessStep num="01" title="Диагностика">
              Понять, что происходит на самом деле.<br />
              Без спешки. Без навязанных рамок.<br />
              Иногда это и есть самое ценное.
            </ProcessStep>

            <ProcessStep num="02" title="Калибровка">
              Найти, где сбились внутренние настройки - в мышлении, решениях или отношении к себе.<br />
              Работаем с основной причиной, а не с симптомами.
            </ProcessStep>

            <ProcessStep num="03" title="Сопровождение">
              Я остаюсь рядом, пока идёт процесс.<br />
              Изменения требуют времени - и кто-то должен быть рядом.
            </ProcessStep>
          </div>

          <div className="mt-20 text-lg md:text-xl font-light text-[color:var(--color-muted)] leading-relaxed">
            <p>Я не даю домашних заданий, если ты их не хочешь. Не говорю тебе, что делать. И не исчезаю после первой встречи.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 6: С КЕМ РАБОТАЮ */}
      <section className="py-32 px-8 bg-[color:var(--color-inverted-bg)] text-[color:var(--color-inverted-fg)] transition-colors duration-400">
        <div className="max-w-[680px] mx-auto text-left">
          <h2 className="text-4xl md:text-5xl mb-12 font-serif tracking-tight text-[color:var(--color-inverted-fg)]">Это не для всех. И это нормально.</h2>

          <div className="text-lg md:text-xl font-light leading-relaxed space-y-6">
            <p>Я работаю с теми, кто устал от правильных советов<br />и готов к честному разговору - прежде всего с собой.</p>
            <p className="opacity-70">Я не скажу, как правильно. Я помогу увидеть, как есть.</p>

            <div className="mt-16 p-8 border border-[color:var(--color-line-inverted)]">
              <p className="font-serif text-2xl">
                Если это про тебя - давай познакомимся.<br />
                Первый разговор ни к чему не обязывает.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 7: ФОРМАТЫ */}
      <section className="py-32 px-8">
        <div className="max-w-[680px] mx-auto text-left">
          <h2 className="text-3xl md:text-4xl mb-4 font-serif tracking-tight text-[color:var(--color-fg)]">
            Три точки входа.
          </h2>
          <div className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light mb-12">
            Выбирай ту, что подходит сейчас.
          </div>

          <div className="space-y-16">
            <FormatItem title="Одна встреча · 50-60 минут">
              <p>Чтобы разобраться в конкретной ситуации<br />или просто почувствовать, как я работаю.</p>
            </FormatItem>

            <FormatItem title="Системная работа · от 5 встреч">
              <p>Диагностика, настройка, сопровождение.<br />Для тех, кто готов идти вглубь - без спешки.</p>
            </FormatItem>

            <FormatItem title="Встреча по бизнесу · 90 минут">
              <p>Взгляд со стороны на бизнес-задачу или решение.<br />Без корпоративного языка. Без готовых ответов.</p>
            </FormatItem>
          </div>

          <div className="mt-20 text-lg md:text-xl font-light text-[color:var(--color-muted)] leading-relaxed space-y-2">
            <p>Одна встреча - от 45 000 ₸.</p>
            <p>Системная работа - по запросу.</p>
            <p className="pt-4 text-sm tracking-widest text-[color:var(--color-faint)]">Работаю онлайн. Отвечаю лично.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 8: FAQ */}
      <section className="py-32 px-8 bg-[color:var(--color-alt)]">
        <div className="max-w-[680px] mx-auto text-left">
          <h2 className="text-3xl md:text-4xl mb-12 font-serif tracking-tight text-[color:var(--color-fg)]">
            Вопросы, которые обычно возникают
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Ты коуч или психолог?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Ни то, ни другое в чистом виде. Есть образование в психотерапии и опыт коучинга - но я не работаю по одной методологии. Мне важнее понять тебя, чем применить технику.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Это терапия?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Не в клиническом смысле. Я работаю с людьми, у которых всё в порядке снаружи - но что-то важное перестало ощущаться своим.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Что будет на первой встрече?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Разговор. Я слушаю - без оценки и без повестки. К концу встречи ты сам почувствуешь, есть ли смысл продолжать.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Я не знаю, с чем именно прийти. Это нормально?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Да. Большинство приходит именно так. Отсутствие чёткого запроса - это не проблема. Это честная точка входа.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Сколько времени это займёт?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                По-разному. Иногда одна встреча даёт ясность. Иногда нужны месяцы. Я не тороплю и не растягиваю.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Работаешь онлайн?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Да. Видео или голос - как удобнее.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9: КОНТАКТЫ & ПОДВАЛ */}
      <footer id="contact" className="pt-32 pb-16 px-8 border-t border-[color:var(--color-line)]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10 font-serif tracking-tight text-[color:var(--color-fg)]">
            Если что-то откликнулось - напиши.
          </h2>
          <div className="text-lg font-light text-[color:var(--color-muted)] mb-16 space-y-2">
            <p>Я отвечаю лично.</p>
          </div>

          <div className="mb-24">
            <ContactForm />
          </div>

          <div className="text-xs tracking-wider text-[color:var(--color-faint)] font-light mt-32">
            Конфиденциальность - основа работы, не формальность.<br /><br />
            © {new Date().getFullYear()} Евгений Левчук
          </div>
        </div>
      </footer>

    </main>
  );
}

// Helper components for clean code

function ProcessStep({ num, title, children }: { num: string, title: string, children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
      <div className="font-serif text-3xl md:text-4xl text-[color:var(--color-faint)] font-light w-16 shrink-0">{num}</div>
      <div>
        <h3 className="text-xl font-medium mb-3 text-[color:var(--color-fg)]">{title}</h3>
        <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function FormatItem({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-serif mb-4 text-[color:var(--color-fg)]">{title}</h3>
      <div className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">{children}</div>
    </div>
  )
}
