import { 
  Search, Plus, MessageSquare, Calendar as CalendarIcon, 
  Type, Check, Play, Clock, Video, MoreHorizontal
} from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-[#D1CDC7]">
      {/* Background text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex flex-col justify-between p-8 sm:p-12">
        <div className="flex justify-between items-start">
          <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter text-black/80 m-0 p-0">
            SAI<sup className="text-[5vw] font-bold align-top top-[-0.5em] relative">®</sup>
          </h1>
          <span className="text-2xl sm:text-3xl font-medium text-black/40">AI Human</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-2xl sm:text-3xl font-medium text-black/40">AI Human</span>
          <span className="text-4xl sm:text-5xl font-bold text-black/60">Work OS</span>
        </div>
      </div>

      {/* Main App Window */}
      <div className="relative z-10 w-full max-w-[1440px] h-[85vh] min-h-[800px] bg-[#F3F0E6] rounded-[2rem] shadow-2xl flex overflow-hidden border border-white/40">
        
        {/* Left Icon Bar */}
        <div className="w-20 bg-[#EBE7DD] flex flex-col items-center py-6 border-r border-black/5 shrink-0">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-8">
            <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 flex-1">
            <span className="font-bold text-sm">AI</span>
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black">
              <MessageSquare size={20} />
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-black/40 hover:text-black transition-colors cursor-pointer">
              <CalendarIcon size={20} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-white cursor-pointer">
              <Type size={20} />
            </div>
            
            <div className="flex flex-col gap-3 mt-4">
              <Image src="https://picsum.photos/seed/user1/100/100" alt="User" width={32} height={32} className="rounded-full object-cover w-8 h-8 cursor-pointer" />
              <Image src="https://picsum.photos/seed/user2/100/100" alt="User" width={32} height={32} className="rounded-full object-cover w-8 h-8 grayscale cursor-pointer" />
              <Image src="https://picsum.photos/seed/user3/100/100" alt="User" width={32} height={32} className="rounded-full object-cover w-8 h-8 cursor-pointer" />
              <Image src="https://picsum.photos/seed/user4/100/100" alt="User" width={32} height={32} className="rounded-full object-cover w-8 h-8 grayscale opacity-70 cursor-pointer" />
            </div>
          </div>

          <div className="mt-auto">
            <Image src="https://picsum.photos/seed/me/100/100" alt="Me" width={40} height={40} className="rounded-full object-cover w-10 h-10 border-2 border-[#F3F0E6] cursor-pointer" />
          </div>
        </div>

        {/* Left Panel (Calendar, Events, Tasks) */}
        <div className="w-[280px] flex flex-col p-6 border-r border-black/5 overflow-y-auto shrink-0 bg-[#F3F0E6]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon size={20} className="text-black/60" />
              <h2 className="font-bold text-lg">Calendar</h2>
            </div>
            <Search size={18} className="text-black/60 cursor-pointer" />
          </div>

          {/* Mini Calendar */}
          <div className="mb-8">
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-black/40 mb-3">
              <div>Su</div><div>Mo</div><div>Tu</div><div className="text-black">We</div><div>Th</div><div>Ft</div><div>Sa</div>
            </div>
            <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-sm font-semibold">
              <div className="text-black/20">31</div>
              <div className="text-black/40">1</div>
              <div className="text-black/40">2</div>
              <div className="relative flex justify-center">
                <div className="w-7 h-7 bg-[#FF2D20] text-white rounded-full flex items-center justify-center">3</div>
                <div className="absolute -bottom-1.5 flex gap-0.5">
                  <div className="w-1 h-1 bg-[#FF2D20] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#00C48C] rounded-full"></div>
                </div>
              </div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              
              <div>7</div>
              <div>8</div>
              <div className="relative flex justify-center">
                9
                <div className="absolute -bottom-1 flex gap-0.5">
                  <div className="w-1 h-1 bg-[#00C48C] rounded-full"></div>
                </div>
              </div>
              <div>10</div>
              <div>11</div>
              <div className="relative flex justify-center">
                12
                <div className="absolute -bottom-1 flex gap-0.5">
                  <div className="w-1 h-1 bg-[#FFB020] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#FF2D20] rounded-full"></div>
                </div>
              </div>
              <div>13</div>

              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>

              <div>21</div>
              <div className="relative flex justify-center">
                22
                <div className="absolute -bottom-1 flex gap-0.5">
                  <div className="w-1 h-1 bg-[#00C48C] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#00C48C] rounded-full"></div>
                </div>
              </div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>

              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div className="text-black/20">1</div>
              <div className="text-black/20">2</div>
              <div className="text-black/20">3</div>
              <div className="text-black/20">4</div>
            </div>
          </div>

          {/* Events */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm">Events</h3>
              <Plus size={16} className="text-black/60 cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Jaroslav Brabec', time: '11:00', img: 'user5' },
                { name: 'Paulina Gayoso', time: '12:15', img: 'user6' },
                { name: 'Trashae Hubbard', time: '13:20', img: 'user7' },
                { name: 'Mathijn Agter', time: '20:00', img: 'user8' },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <Image src={`https://picsum.photos/seed/${event.img}/100/100`} alt={event.name} width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
                    <span className="text-sm font-semibold group-hover:text-black/70 transition-colors">{event.name}</span>
                  </div>
                  <span className="text-xs text-black/40 font-medium">{event.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="mb-8 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm">Tasks</h3>
              <Plus size={16} className="text-black/60 cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Buy Sunlite', icon: '👓' },
                { name: 'to Hallie Alvarado', icon: '🚀' },
                { name: 'Get radi', icon: '📦' },
                { name: 'Go to mouvi', icon: '🏃' },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{task.icon}</span>
                    <span className="text-sm font-semibold group-hover:text-black/70 transition-colors">{task.name}</span>
                  </div>
                  <div className="w-4 h-4 rounded border border-dashed border-black/30 group-hover:border-black/60 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex justify-center pb-4">
            <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Middle Panel (Main Calendar) */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto bg-[#F3F0E6]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              May <span className="text-black/40">2025</span>
            </h2>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black/80 transition-colors">
              <Check size={16} /> Share
            </button>
          </div>
          
          <div className="w-full h-px bg-black/10 mb-8"></div>

          <div className="flex flex-col gap-12">
            {/* Day 03 */}
            <div className="flex gap-8">
              <div className="w-24 shrink-0">
                <div className="text-6xl font-black tracking-tighter leading-none">03</div>
                <div className="text-[#FF2D20] font-bold text-xl mt-1">We</div>
              </div>
              
              <div className="flex-1 flex flex-col gap-6">
                {/* Event 1 */}
                <div className="flex gap-6 relative">
                  <div className="w-24 shrink-0 text-sm font-bold pt-1">
                    10:00 <span className="text-black/40 font-medium">-17:30</span>
                  </div>
                  <div className="w-1 bg-[#00C48C] rounded-full shrink-0"></div>
                  <div className="flex-1 pb-6 border-b border-[#FF2D20]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#00C48C] font-bold text-sm mb-1">Learn Design</h4>
                        <p className="font-bold text-lg leading-tight mb-3">Design meeting check<br/>product</p>
                        <div className="flex items-center gap-2 text-xs text-black/40 font-medium">
                          <MoreHorizontal size={14} /> Call Detile
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <Image src="https://picsum.photos/seed/u1/100/100" alt="User" width={28} height={28} className="rounded-full border-2 border-[#F3F0E6] w-7 h-7 object-cover" />
                        <Image src="https://picsum.photos/seed/u2/100/100" alt="User" width={28} height={28} className="rounded-full border-2 border-[#F3F0E6] w-7 h-7 object-cover" />
                        <Image src="https://picsum.photos/seed/u3/100/100" alt="User" width={28} height={28} className="rounded-full border-2 border-[#F3F0E6] w-7 h-7 object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-6">
                  <div className="w-24 shrink-0 text-sm font-bold pt-1">
                    13:30 <span className="text-black/40 font-medium">-17:30</span>
                  </div>
                  <div className="w-1 bg-[#FFB020] rounded-full shrink-0"></div>
                  <div className="flex-1 pb-6 border-b border-black/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#FFB020] font-bold text-sm mb-1">Working</h4>
                        <p className="font-bold text-lg leading-tight mb-3">Design meeting check<br/>product</p>
                        <div className="flex items-center gap-2 text-xs text-black/40 font-medium">
                          <div className="w-5 h-5 bg-white rounded flex items-center justify-center shadow-sm">
                            <Video size={12} className="text-green-500" />
                          </div>
                          Google Meet
                        </div>
                      </div>
                      <Image src="https://picsum.photos/seed/u4/100/100" alt="User" width={28} height={28} className="rounded-full w-7 h-7 object-cover" />
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="flex gap-6">
                  <div className="w-24 shrink-0 text-sm font-bold pt-1">
                    17:30 <span className="text-black/40 font-medium">-17:45</span>
                  </div>
                  <div className="w-1 bg-[#007AFF] rounded-full shrink-0"></div>
                  <div className="flex-1 pb-6 border-b border-black/10">
                    <h4 className="font-bold text-lg">Coffe time</h4>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="flex gap-6">
                  <div className="w-24 shrink-0 text-sm font-bold pt-1">
                    18:00 <span className="text-black/40 font-medium">-18:30</span>
                  </div>
                  <div className="w-1 bg-[#007AFF] rounded-full shrink-0"></div>
                  <div className="flex-1 pb-6">
                    <h4 className="text-[#007AFF] font-bold text-sm mb-1">Design Seeng</h4>
                    <p className="font-bold text-lg leading-tight mb-3">Design meeting check<br/>product</p>
                    <div className="flex items-center gap-2 text-xs text-black/40 font-medium">
                      <div className="w-5 h-5 bg-[#2D8CFF] rounded flex items-center justify-center text-white">
                        <Video size={12} />
                      </div>
                      Zoom
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-black/10"></div>

            {/* Day 04 */}
            <div className="flex gap-8">
              <div className="w-24 shrink-0">
                <div className="text-6xl font-black tracking-tighter leading-none">04</div>
                <div className="text-[#FF2D20] font-bold text-xl mt-1">Th</div>
              </div>
              
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-24 shrink-0 text-sm font-bold pt-1">
                    18:30 <span className="text-black/40 font-medium">-21:30</span>
                  </div>
                  <div className="w-1 bg-[#FF2D20] rounded-full shrink-0"></div>
                  <div className="flex-1 pb-6">
                    <h4 className="text-[#FF2D20] font-bold text-sm mb-1">Reed Book</h4>
                    <p className="font-bold text-lg leading-tight mb-3">Design meeting check<br/>product</p>
                    <div className="flex items-center gap-2 text-xs text-black/40 font-medium">
                      <div className="w-5 h-5 bg-white rounded flex items-center justify-center shadow-sm">
                        <Video size={12} className="text-green-500" />
                      </div>
                      Google Meet
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-black/10"></div>

            {/* Day 05 */}
            <div className="flex gap-8">
              <div className="w-24 shrink-0">
                <div className="text-6xl font-black tracking-tighter leading-none">05</div>
                <div className="text-[#FF2D20] font-bold text-xl mt-1">Ft</div>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 pt-2">
                <div className="bg-[#EBE7DD] rounded-2xl p-6 flex flex-col items-center justify-center text-black/40 max-w-xs border border-white/50">
                  <div className="w-10 h-10 rounded-xl border-2 border-black/20 mb-3 flex items-center justify-center">
                    <div className="w-6 h-3 border-2 border-black/20 rounded-t-lg border-b-0"></div>
                  </div>
                  <p className="font-medium text-sm">There is no meeting yet</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Panel (Ai Assistant) */}
        <div className="w-[340px] bg-[#EBE7DD] flex flex-col p-6 overflow-y-auto shrink-0 border-l border-black/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-xl">Ai Assistant</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center text-black/60 hover:bg-white transition-colors">
                <div className="w-3 h-3 border-2 border-current rounded-sm"></div>
              </button>
              <button className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center text-black/60 hover:bg-white transition-colors">
                <Clock size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Ai Sumari */}
            <div className="col-span-2 bg-[#F3F0E6] rounded-2xl p-4 shadow-sm border border-white/60">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-sm">Ai Sumari</h3>
                  <p className="text-xs text-black/40 font-medium">All Massage</p>
                </div>
              </div>
              <div className="flex items-end gap-1 h-12 mb-4">
                {[30, 45, 20, 60, 80, 50, 40, 70, 90, 30, 50, 60, 40, 80, 100, 70, 50, 40, 60, 30, 45, 20, 60, 80, 50, 40, 70, 90, 30, 50].map((h, i) => (
                  <div key={i} className="w-1.5 bg-black rounded-full" style={{height: `${h}%`, opacity: i > 15 ? 0.2 : 1}}></div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                  <Play size={14} className="ml-0.5" />
                </button>
                <span className="text-xs font-bold">0:19</span>
              </div>
            </div>

            {/* Search Picchers */}
            <div className="col-span-2 bg-[#F3F0E6] rounded-2xl p-4 shadow-sm border border-white/60">
              <h3 className="font-bold text-sm mb-3">Search<br/>Picchers</h3>
              <div className="flex gap-2 mb-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden rotate-[-5deg] shadow-sm border border-white">
                  <Image src="https://picsum.photos/seed/p1/200/200" alt="Pic" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden rotate-[5deg] shadow-sm border border-white -ml-4 z-10">
                  <Image src="https://picsum.photos/seed/p2/200/200" alt="Pic" width={64} height={64} className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-xs font-medium text-black/60 leading-tight">
                to AI<br/>
                <span className="text-black font-bold">Your trip with Gojek<br/>on Wednesday</span>
              </p>
            </div>

            {/* Timer */}
            <div className="col-span-1 bg-[#F3F0E6] rounded-2xl p-4 shadow-sm border border-white/60 flex flex-col items-center justify-center aspect-square relative overflow-hidden">
              <h3 className="font-bold text-sm absolute top-4 left-4">Timer</h3>
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-black/10 flex items-center justify-center mt-4 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
                <div className="text-2xl font-black">22</div>
              </div>
            </div>

            {/* Docs */}
            <div className="col-span-1 bg-[#F3F0E6] rounded-2xl p-4 shadow-sm border border-white/60 flex flex-col aspect-square relative">
              <h3 className="font-bold text-sm mb-2">Docs</h3>
              <div className="flex-1 relative mt-2">
                <div className="absolute top-0 left-2 w-16 h-20 bg-white rounded-lg shadow-sm rotate-[-10deg] border border-black/5 overflow-hidden">
                  <Image src="https://picsum.photos/seed/d1/100/150" alt="Doc" width={64} height={80} className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute top-2 left-6 w-16 h-20 bg-white rounded-lg shadow-md rotate-[5deg] border border-black/5 overflow-hidden z-10">
                  <Image src="https://picsum.photos/seed/d2/100/150" alt="Doc" width={64} height={80} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 w-5 h-5 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[10px] font-bold">9</div>
                </div>
              </div>
              <p className="text-[10px] font-medium text-black/40 mt-auto leading-tight">
                April<br/>Metup
              </p>
            </div>

            {/* Project */}
            <div className="col-span-2 bg-[#F3F0E6] rounded-2xl p-4 shadow-sm border border-white/60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm">Project</h3>
                <Plus size={16} className="text-black/60 cursor-pointer" />
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-5 h-5 bg-[#0052CC] rounded-[4px] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF3621]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF3621] opacity-60"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF3621] opacity-30"></div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <div className="font-serif font-bold text-lg">N</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
