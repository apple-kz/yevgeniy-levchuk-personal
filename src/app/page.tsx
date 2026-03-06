import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full h-full text-center relative">
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
              Я не коуч с методологией и не терапевт с протоколом. Я человек, который много лет работает рядом с людьми в важные моменты их жизни - когда что-то разладилось и пока непонятно, что делать дальше.
            </p>
            <p>
              За эти годы я работал с группами и один на один, много путешествовал, видел, как люди устроены в разных культурах и обстоятельствах. Это даёт мне широкий контекст - я не смотрю на тебя через одну методологию.
            </p>
            <p className="text-[color:var(--color-fg)] font-normal">
              Я не даю готовых ответов. Я помогаю тебе услышать свои.
            </p>

            <div className="mt-16 bg-[color:var(--color-panel)] p-8 md:p-12 border border-[color:var(--color-line)] rounded-sm transition-colors duration-400">
              <p className="font-serif text-xl md:text-2xl text-[color:var(--color-muted)]">
                Всё начинается с доверия.<br />
                Не как принцип - как условие.
              </p>
            </div>
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

            <ProcessStep num="02" title="Настройка">
              Найти, где что-то разрегулировалось - в мышлении, в решениях, в том, как ты относишься к себе.<br />
              Работать именно с этим. Не с симптомами.
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
            <p className="opacity-70">Если ты ищешь человека, который скажет что делать - я не тот. Если ищешь место, где можно наконец разобраться - возможно, тот.</p>

            <div className="mt-16 p-8 border border-[color:var(--color-line-inverted)]">
              <p className="font-serif text-2xl">
                Если что-то отозвалось - напиши.<br />
                Первый разговор ни к чему не обязывает.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 7: ФОРМАТЫ */}
      <section className="py-32 px-8">
        <div className="max-w-[680px] mx-auto text-left">
          <span className="text-xs tracking-widest uppercase text-[color:var(--color-faint)] font-semibold mb-12 block">Форматы работы</span>

          <div className="space-y-16">
            <FormatItem title="Одна встреча">
              <p>50-60 минут. Чтобы разобраться в конкретной ситуации или почувствовать, как я работаю.</p>
            </FormatItem>

            <FormatItem title="Системная работа">
              <p>От пяти встреч. Диагностика, настройка, сопровождение. Для тех, кто готов идти вглубь и не торопится.</p>
            </FormatItem>

            <FormatItem title="Встреча по бизнесу">
              <p>90 минут. Для руководителей и предпринимателей - взгляд со стороны без корпоративного языка и готовых решений.</p>
            </FormatItem>
          </div>

          <div className="mt-16 text-sm tracking-widest uppercase text-[color:var(--color-faint)] pb-4 border-b border-[color:var(--color-line)] inline-block">
            Одна встреча - от 50 000 ₸. Системная работа - по запросу. Онлайн. Отвечаю лично.
          </div>

          <div className="mt-12 text-sm text-[color:var(--color-faint)] font-light">
            <p>Работаете с командой или ищете внешний взгляд на бизнес-задачу?</p>
            <a href="/business" className="inline-block mt-2 hover:text-[color:var(--color-fg)] transition-colors">
              → Страница для бизнеса
            </a>
          </div>
        </div>
      </section>

      {/* BLOCK 8: FAQ */}
      <section className="py-32 px-8 bg-[color:var(--color-alt)]">
        <div className="max-w-[680px] mx-auto text-left">
          <span className="text-xs tracking-widest uppercase text-[color:var(--color-faint)] font-semibold mb-12 block">Частые вопросы</span>
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
                Разговор. Я буду слушать - без оценки и без повестки. Ты сам почувствуешь, есть ли смысл продолжать.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Я не знаю, с чем именно прийти. Это нормально?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Да. Большинство приходит именно так - с ощущением, что что-то не так, но без чёткого запроса. Это хорошая точка входа.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Сколько времени займёт работа?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Зависит от запроса. Иногда одна встреча даёт ясность. Иногда нужны месяцы. Я не тороплю и не растягиваю.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 font-medium text-[color:var(--color-fg)]">Ты работаешь онлайн?</h3>
              <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
                Да. Видео или голос - как тебе удобнее.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9: КОНТАКТЫ & ПОДВАЛ */}
      <footer id="contact" className="pt-32 pb-16 px-8 border-t border-[color:var(--color-line)]">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10 font-serif tracking-tight text-[color:var(--color-fg)]">Просто напиши.</h2>
          <div className="text-lg font-light text-[color:var(--color-muted)] mb-16 space-y-2">
            <p>Если что-то отозвалось - этого достаточно.</p>
            <p>Я отвечаю лично. Без менеджеров, без воронок, без автоответов.</p>
          </div>

          <div className="flex flex-col items-center gap-6 mb-24">
            <a href="https://t.me/elevchuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:opacity-50 transition-opacity text-[color:var(--color-fg)]">
              Telegram <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/77055311672" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium hover:opacity-50 transition-opacity text-[color:var(--color-fg)]">
              WhatsApp <ArrowRight size={18} />
            </a>
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
