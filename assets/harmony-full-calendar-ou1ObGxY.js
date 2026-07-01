import{j as e}from"./vendor-query-ImrhQQaL.js";import{R as Me,h as s}from"./vendor-react-DeHLy_d5.js";import{F as Te,b as $e,c as Ee,d as De,i as Le,a as Ie}from"./vendor-calendar-DHvJI069.js";import{H as ee}from"./harmony-dialog-DF6CgmRt.js";import{H as Pe}from"./HarmonyForm-BuTq4FWz.js";import{V as Ve,a as re,C as O,b as te,c as ze,g as Fe}from"./utils-DzidQWo2.js";import{aL as se,az as Re,ay as Ae,o as Oe,C as q,q as We,r as He,aB as U,a0 as Ye,v as qe,H as Ue}from"./vendor-ui-BH7wqv8k.js";import{l as Be}from"./leaveService-NSC5vORz.js";import{i as Ke}from"./index-CqY_cGKw.js";import{D as Ge}from"./enums-C1aPT1Vs.js";import{P as Xe,O as _e,d as Je,b as Qe,q as W,G as ae}from"./vendor-utils-B9rsyKdh.js";const Ze=({currentView:d,handleViewChange:f})=>e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Ve.map(N=>e.jsx("div",{className:"flex items-center bg-muted border border-border rounded-lg p-0.5",children:N.views.map(g=>e.jsx("button",{onClick:()=>f(g.key),className:`px-3 py-1 text-[11px] font-bold rounded-md transition-all ${d===g.key?"bg-card text-foreground shadow-sm border border-border":"text-muted-foreground hover:text-foreground"}`,children:g.label},g.key))},N.label))}),er=({teamMembers:d,selectedMembers:f,toggleAllMembers:N,handleMemberToggle:g})=>{const[y,C]=Me.useState(""),D=f.length===d.length,S=f.length===0,L=d.filter(x=>x.name.toLowerCase().includes(y.toLowerCase()));return e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("div",{className:"relative group",children:[e.jsx(se,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors"}),e.jsx("input",{type:"text",placeholder:"Search team members...",value:y,onChange:x=>C(x.target.value),className:"pl-9 pr-4 py-1.5 bg-muted/50 border border-border rounded-xl text-xs font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{onClick:()=>N(!0),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black uppercase tracking-wider transition-all ${D?"bg-foreground text-background border-transparent":"bg-card text-muted-foreground border-border hover:bg-muted"}`,children:[e.jsx(Re,{className:"w-3.5 h-3.5"}),"Select All"]}),e.jsxs("button",{onClick:()=>N(!1),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black uppercase tracking-wider transition-all ${S?"bg-foreground text-background border-transparent":"bg-card text-muted-foreground border-border hover:bg-muted"}`,children:[e.jsx(Ae,{className:"w-3.5 h-3.5"}),"Clear"]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar",children:[L.map(x=>{const v=f.includes(x.id);return e.jsxs("button",{onClick:()=>g(x.id),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium transition-all border select-none ${v?"shadow-sm":"bg-card text-muted-foreground border-border hover:border-border/80"}`,style:v?{backgroundColor:`${x.hexColor}15`,color:x.hexColor,borderColor:`${x.hexColor}40`}:{},children:[e.jsx("span",{className:`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 transition-all ${v?"bg-current":"border-2 border-border"}`,style:v?{opacity:.2}:{},children:v&&e.jsx(Oe,{className:"w-2.5 h-2.5 text-white"})}),e.jsx("span",{className:"uppercase tracking-widest",children:x.name})]},x.id)}),L.length===0&&e.jsxs("span",{className:"text-muted-foreground italic text-[11px] flex items-center gap-2 py-2",children:[e.jsx(se,{className:"w-3.5 h-3.5"})," No matching members found."]})]})]})},pr=({schedules:d,publicHolidays:f=[],leaves:N=[],extraShifts:g=[],initialDate:y,editable:C=!1,showMemberFilter:D=!1,onDayEdit:S,toolbarActions:L,isLoading:x=!1,onDateContextMenu:v,onDateChange:oe})=>{const B=s.useRef(null),K=s.useRef(null),[h,I]=s.useState(y??new Date),[ne,le]=s.useState(y);y!==ne&&(le(y),y&&I(y));const[w,de]=s.useState("dayGridMonth"),[M,ie]=s.useState(!0),[P,H]=s.useState([]),[p,V]=s.useState(null),[z,F]=s.useState(null),[G,R]=s.useState(!1),[ce,X]=s.useState(!1),[_,T]=s.useState(null),[b,J]=s.useState(null),[me,Q]=s.useState(!1),Z=s.useRef(h);s.useEffect(()=>{const r=Z.current;Z.current=h,!(r.getFullYear()===h.getFullYear()&&r.getMonth()===h.getMonth())&&oe?.(h)},[h]),s.useEffect(()=>{const r=B.current?.getApi();r&&(r.gotoDate(h),r.changeView(w))},[h,w]);const u=s.useMemo(()=>{const r=new Map;let a=0;for(const n of d){const t=re(n);if(!r.has(t)){const o=O[a%O.length];r.set(t,{id:t,name:te(n),fullName:n.userProfile?.fullName,email:n.userProfile?.email,bgClass:o.bgClass,hexColor:o.hexColor,scheduleId:n.id}),a++}}if(r.size===1){const[n,t]=Array.from(r.entries())[0];r.set(n,{...t,bgClass:O[0].bgClass,hexColor:O[0].hexColor})}return Array.from(r.values())},[d]),[pe,ue]=s.useState(u);u!==pe&&(ue(u),u.length>0&&P.length===0&&H(u.map(r=>r.id)));const Y=s.useMemo(()=>new Set((f??[]).map(r=>r.date.slice(0,10))),[f]),xe=s.useMemo(()=>{const r=[],a=new Map(u.map(t=>[t.id,t])),n=P.map(t=>t.toLowerCase());if(M)for(const t of f??[]){const o=t.date.slice(0,10);r.push({id:`holiday-bg-${o}`,date:o,allDay:!0,display:"background",color:"var(--color-warning, #fde68a)"}),r.push({id:`holiday-${o}`,title:t.name,date:o,allDay:!0,backgroundColor:"var(--color-warning)",borderColor:"var(--color-warning)",textColor:"var(--color-warning-foreground)",extendedProps:{type:"public-holiday",description:t.description}})}for(const t of d){if(!t?.days)continue;const o=re(t),c=o.toLowerCase(),m=Array.from(a.values()).find(l=>l.id.toLowerCase()===c);for(const l of t.days){const i=l.date.slice(0,10);if(!l.shiftType){l.dayType==="Weekend"&&!Y.has(i)&&r.push({id:`weekend-bg-${i}-${o}`,date:i,allDay:!0,display:"background",color:"var(--color-muted)",extendedProps:{type:"weekend-background"}});continue}if(l.shiftType.toLowerCase().includes("holiday")){M&&!Y.has(i)&&r.push({id:`sched-holiday-tile-${i}-${o}`,title:l.shiftType,date:i,allDay:!0,extendedProps:{type:"public-holiday"}});continue}if(m&&n.includes(c)){const A=te(t),$=d.length>1,k=l.dayType==="Weekend"||l.workDescription&&l.workDescription.startsWith("Extra Shift:"),E=$?`${A} — ${l.shiftType}`:l.shiftType;r.push({id:`shift-${i}-${o}`,title:E,date:i,className:k?"premium-extra-shift":"premium-member-shift",extendedProps:{type:"member-shift",member:m,task:l.workDescription,isEditable:l.isEditable,scheduleId:t.id,scheduleStatus:t.status,isExtraShift:k}})}}}for(const t of N??[]){const o=t.leaveDate.slice(0,10),c=t.userProfileId.toLowerCase();if(n.includes(c)){const m=Array.from(a.values()).find(j=>j.id.toLowerCase()===c),l=m?m.name:"Member",i=d.length>1;r.push({id:`leave-${t.id}`,title:i?`${l} — Leave`:"Leave",date:o,allDay:!0,className:"premium-leave-event",extendedProps:{type:"leave-request",leaveType:t.leaveType,leaveSize:t.leaveSize,status:t.status,reason:t.reason},backgroundColor:"transparent",borderColor:"transparent",textColor:"var(--color-foreground)"}),r.push({id:`leave-bg-${t.id}`,date:o,allDay:!0,display:"background",backgroundColor:"var(--color-muted)"})}}for(const t of g??[]){const o=t.date.slice(0,10),c=t.userProfileId.toLowerCase();if(n.includes(c)){const m=Array.from(a.values()).find($=>$.id.toLowerCase()===c),l=t.userFullName||(m?m.name:"Member"),i=ze(t.shiftType),A=d.length>1?`${l} — ${i} (EXTRA)`:`${i} (EXTRA)`;r.push({id:`extra-shift-${t.id}`,title:A,date:o,className:"premium-extra-shift",extendedProps:{type:"extra-shift",member:m,task:t.reason,isExtraShift:!0,extraShiftId:t.id}})}}return r},[d,g,f,Y,u,P,M,N]),fe=s.useCallback(()=>I(r=>w==="multiMonthYear"?Xe(r):_e(r)),[w]),he=s.useCallback(()=>I(r=>w==="multiMonthYear"?Je(r,1):Qe(r,1)),[w]),be=s.useCallback(()=>I(new Date),[]),ge=s.useCallback(r=>de(r),[]),ye=w==="multiMonthYear"?`${h.getFullYear()}`:W(h,"MMMM yyyy"),ve=s.useCallback(r=>H(r?u.map(a=>a.id):[]),[u]),we=s.useCallback(r=>H(a=>a.includes(r)?a.filter(n=>n!==r):[...a,r]),[]),Ne=s.useCallback(r=>{if(!C)return;const a=d[0];if(!a)return;const n=a.days?.find(t=>t.date.slice(0,10)===r.dateStr);n?.isEditable&&(T(null),V(n),F(a.id),R(!0))},[C,d]),je=s.useCallback(r=>{const{type:a,member:n,task:t,scheduleId:o,isEditable:c}=r.event.extendedProps;if(a!=="member-shift")return;if(d.length>1){const j=r.event.startStr.slice(0,10),$=d.find(E=>E.id===o)?.days.find(E=>E.date.slice(0,10)===j);let k=r.event.title;k.includes(" — ")&&(k=k.split(" — ")[1]),J({userName:n?.name||"Unknown Member",date:j,shiftType:k,dayType:$?.dayType||"WorkDay",workDescription:t||"No description provided.",member:n}),Q(!0);return}if(!C||!c)return;const l=d[0];if(!l)return;const i=l.days?.find(j=>j.date.slice(0,10)===r.event.startStr.slice(0,10));i&&(T(null),V(i),F(l.id),R(!0))},[d,C]),ke=s.useMemo(()=>{if(p)return{MonthId:z||"",Date:p.date||"",DayType:p.dayType||"",ShiftType:p.shiftType||"",WorkDescription:p.workDescription||""}},[p,z]),Ce=s.useCallback(async r=>{if(!p?.date||!S)return;const a=r.MonthId??r.monthId??z,n=r.Date??r.date??p.date,t=r.DayType??r.dayType,o=r.ShiftType??r.shiftType,c=r.WorkDescription??r.workDescription;if(!a||!n)return;const m={monthId:a,date:n,dayType:t||Ge.WorkDay,shiftType:o||null,workDescription:c?String(c):""};T(null),X(!0);try{await S(m),R(!1),F(null),V(null)}catch(l){T(Ke(l))}finally{X(!1)}},[p,z,S]),Se=s.useCallback(r=>{v&&(r.el.oncontextmenu=a=>{a.preventDefault();const n=r.el.getAttribute("data-date")||W(r.date,"yyyy-MM-dd");v(n,a.pageX,a.pageY)})},[v]);return e.jsxs("div",{className:"section-card overflow-hidden",children:[e.jsxs("div",{className:"px-8 py-5 border-b border-border flex flex-wrap items-center justify-between gap-5",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm",children:e.jsx(q,{className:"w-5 h-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-foreground leading-tight tracking-tight",children:ye}),e.jsx("p",{className:"text-muted-foreground text-[11px] mt-0.5 font-semibold uppercase tracking-widest",children:"Work Schedule Overview"})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("div",{className:"flex items-center bg-muted/50 rounded-xl p-1",children:[e.jsx("button",{onClick:fe,className:"p-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-all",children:e.jsx(We,{className:"w-4 h-4"})}),e.jsx("button",{onClick:be,className:"px-5 py-2 text-xs font-bold text-foreground hover:bg-card rounded-lg transition-all uppercase tracking-widest",children:"Today"}),e.jsx("button",{onClick:he,className:"p-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-all",children:e.jsx(He,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"h-7 w-px bg-border mx-0.5 hidden sm:block"}),e.jsx("div",{className:"hidden lg:block",children:e.jsx(Ze,{currentView:w,handleViewChange:ge})}),L]})]}),e.jsxs("div",{className:"px-6 py-3.5 flex flex-wrap items-center gap-4 bg-muted/20 border-b border-border",children:[e.jsxs("button",{onClick:()=>ie(r=>!r),className:`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${M?"bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 shadow-sm":"bg-card border-border text-muted-foreground hover:border-border hover:bg-muted"}`,children:[e.jsx(U,{className:"w-3.5 h-3.5"}),M?`Holidays Visible (${f?.length??0})`:"Holidays Hidden"]}),!D&&u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-px h-5 bg-border hidden sm:block"}),e.jsxs("div",{className:"flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5",children:[u.slice(0,8).map(r=>e.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[e.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${r.bgClass} ring-2 ring-card shadow-sm`}),e.jsx("span",{className:"text-[11px] font-semibold text-foreground",children:r.name.split(" ")[0]})]},r.id)),u.length>8&&e.jsxs("span",{className:"text-[11px] font-bold text-muted-foreground",children:["+",u.length-8," more"]})]})]})]}),D&&e.jsx("div",{className:"px-6 pb-5 pt-3 border-b border-border",children:e.jsx(er,{teamMembers:u,selectedMembers:P,toggleAllMembers:ve,handleMemberToggle:we})}),e.jsxs("div",{className:"p-6 relative",children:[x&&e.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center bg-background/60 rounded-xl",children:e.jsxs("div",{className:"flex flex-col items-center gap-3 text-muted-foreground",children:[e.jsx(Ye,{className:"w-6 h-6 animate-spin text-primary"}),e.jsx("p",{className:"text-xs font-semibold",children:"Loading schedule…"})]})}),e.jsx(Te,{ref:B,plugins:[$e,Ee,De,Le,Ie],initialView:w,initialDate:h,headerToolbar:!1,events:xe,dateClick:Ne,eventClick:je,dayCellDidMount:Se,height:"auto",dayMaxEvents:4,firstDay:0,multiMonthMaxColumns:3,eventContent:r=>{const{type:a,member:n,description:t}=r.event.extendedProps;if(a==="holiday-background"||a==="weekend-background")return null;if(a==="public-holiday")return e.jsxs("div",{className:"px-2 py-1 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-800 flex items-center gap-1.5 w-full",title:t??r.event.title,children:[e.jsx(U,{className:"w-3 h-3 shrink-0 text-amber-600"}),e.jsx("span",{className:"truncate",children:r.event.title})]});if(a==="member-shift"){const o=n,c=r.event.extendedProps.isExtraShift,m=r.event.title.split(" — ").pop(),l=d.length>1;return e.jsxs("div",{className:"flex items-center gap-2 px-2.5 py-1 rounded-md transition-all",style:{borderLeft:`2px solid ${o.hexColor}`,backgroundColor:`${o.hexColor}15`},children:[e.jsx("span",{className:"text-[10px] font-medium truncate",style:{color:o.hexColor},children:l?`${o.name.split(" ")[0]}: ${m}`:m}),c&&e.jsx("span",{className:"px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-black rounded uppercase tracking-tighter leading-none shrink-0",children:"Extra"})]})}return a==="leave-request"?e.jsxs("div",{className:"flex items-center gap-2 px-2 py-1 rounded-md bg-primary/5 border-l-2 border-primary/30",children:[e.jsx(q,{className:"w-2.5 h-2.5 text-primary/60"}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("span",{className:"text-[10px] font-bold text-foreground truncate leading-tight",children:r.event.title}),e.jsx("span",{className:"text-[8px] font-medium text-muted-foreground uppercase tracking-wide",children:Be.leaveType[r.event.extendedProps.leaveType]})]})]}):e.jsx("div",{className:"px-1.5 py-0.5 text-[11px] font-medium text-foreground",children:r.event.title})},noEventsContent:()=>e.jsx("div",{className:"text-center py-16 bg-muted/30 rounded-2xl border border-dashed border-border m-8",children:e.jsx("p",{className:"text-muted-foreground text-sm font-medium",children:"No events listed for this period."})})})]}),e.jsx("style",{children:`
        .fc {
          --fc-border-color: var(--color-border);
          --fc-today-bg-color: var(--color-muted);
          --fc-page-bg-color: transparent;
          --fc-small-font-size: 0.8em;
        }
        .fc .fc-scrollgrid {
          border: none !important;
          border-radius: 12px;
          overflow: hidden;
        }
        .fc .fc-col-header-cell {
          padding: 14px 0 !important;
          background: var(--color-muted);
          border: none !important;
          border-bottom: 1px solid var(--color-border) !important;
        }
        .fc .fc-col-header-cell-cushion {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-muted-foreground);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-decoration: none !important;
        }
        .fc .fc-day {
          border: 1px solid var(--color-border);
        }
        .fc .fc-daygrid-day-number {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-foreground);
          padding: 8px 12px;
          text-decoration: none !important;
        }
        .fc .fc-daygrid-day-number:hover {
          color: var(--color-primary);
        }
        .fc .fc-day-today {
          background-color: var(--color-muted) !important;
        }
        .fc .fc-day-today .fc-daygrid-day-number {
          color: var(--color-primary);
          font-weight: 800;
        }
        .fc .fc-day-today .fc-daygrid-day-frame {
          background: color-mix(in oklab, var(--color-primary) 8%, var(--color-card));
        }
        .fc .fc-daygrid-event {
          margin: 2px 4px !important;
          border: none !important;
          background: transparent !important;
          border-radius: 6px !important;
        }
        .fc .fc-daygrid-more-link {
          font-size: 10px;
          font-weight: 700;
          color: var(--color-primary);
          background: color-mix(in oklab, var(--color-primary) 12%, var(--color-card));
          padding: 2px 7px;
          border-radius: 6px;
          text-transform: uppercase;
          margin-left: 6px;
          letter-spacing: 0.04em;
        }
        .fc .fc-daygrid-more-link:hover {
          background: color-mix(in oklab, var(--color-primary) 20%, var(--color-card));
        }
        .fc-popover {
          background-color: var(--color-card) !important;
          border: 1px solid var(--color-border) !important;
          border-radius: 16px !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
          z-index: 1000 !important;
          overflow: hidden !important;
        }
        .fc-popover .fc-popover-header {
          background: var(--color-muted) !important;
          padding: 8px 12px !important;
          border-bottom: 1px solid var(--color-border) !important;
          font-weight: 700 !important;
          font-size: 12px !important;
          color: var(--color-foreground) !important;
        }
        .fc-popover .fc-popover-body {
          padding: 8px !important;
          background-color: var(--color-card) !important;
        }
        .fc-popover .fc-daygrid-event {
          margin: 4px 0 !important;
        }
        .fc-theme-standard .fc-list-day-cushion {
          background-color: var(--color-muted);
          font-weight: 700;
          color: var(--color-foreground);
          font-size: 12px;
          letter-spacing: 0.04em;
        }
        .fc .fc-list-event-title {
          font-weight: 600;
          color: var(--color-foreground);
          font-size: 13px;
        }
        .fc .fc-list-event-time {
          color: var(--color-muted-foreground);
          font-size: 11px;
          font-weight: 600;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .ws-label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: var(--color-muted-foreground);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .ws-section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--color-border), transparent);
        }
      `}),e.jsxs(ee,{open:G&&!!p,onOpenChange:r=>{r||(R(!1),F(null),V(null),T(null))},title:"Edit Schedule Entry",description:p?W(ae(p.date),"EEEE, dd MMMM yyyy"):"",size:"xl",onSubmit:()=>{K.current=document.getElementById("edit-schedule-day-form"),K.current?.requestSubmit()},submitLabel:"Save Entry",isSubmitting:ce,children:[_&&e.jsxs("div",{className:"mb-5 p-3.5 bg-destructive/10 border border-destructive/20 rounded-xl flex items-start gap-2.5",children:[e.jsx(qe,{className:"w-4 h-4 text-destructive shrink-0 mt-0.5"}),e.jsx("p",{className:"text-destructive text-sm font-medium",children:_})]}),p&&e.jsx(Pe,{id:"edit-schedule-day-form",dtoName:"UpdateWorkScheduleDayDTO",onSubmit:Ce,defaultValues:ke,hideSubmitButton:!0},`${p.date}-${G}`)]}),e.jsx(ee,{open:me&&!!b,onOpenChange:r=>{r||(Q(!1),J(null))},title:b?.userName??"",size:"xl",showFooter:!1,children:b&&e.jsxs("div",{className:"space-y-7",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-base font-bold shadow-md ring-4 ring-white ${b.member.bgClass}`,children:Fe(b.userName)}),e.jsx("span",{className:"text-muted-foreground text-[10px] font-bold uppercase tracking-wide",children:"Task Details"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-5",children:[e.jsxs("div",{className:"space-y-2.5",children:[e.jsx("p",{className:"ws-label",children:"Date"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0",children:e.jsx(q,{className:"w-3.5 h-3.5 text-primary"})}),e.jsx("span",{className:"text-sm font-semibold text-foreground",children:W(ae(b.date),"dd MMM yyyy")})]})]}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsx("p",{className:"ws-label",children:"Shift Type"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0",children:e.jsx(Ue,{className:"w-3.5 h-3.5 text-amber-500"})}),e.jsx("span",{className:"text-sm font-semibold text-foreground",children:b.shiftType})]})]}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsx("p",{className:"ws-label",children:"Day Category"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0",children:e.jsx(U,{className:"w-3.5 h-3.5 text-emerald-500"})}),e.jsx("span",{className:"text-sm font-semibold text-foreground",children:b.dayType})]})]})]}),e.jsx("div",{className:"ws-section-divider"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"ws-label",children:"Work Description"}),e.jsx("div",{className:"bg-muted/30 rounded-2xl border border-border p-5 min-h-30",children:b.workDescription?e.jsx("p",{className:"text-sm text-foreground font-medium leading-relaxed whitespace-pre-wrap",children:b.workDescription.replace(/<[^>]+>/g,"")}):e.jsx("p",{className:"text-sm text-muted-foreground italic",children:"No description provided."})})]})]})})]})};export{pr as H};
