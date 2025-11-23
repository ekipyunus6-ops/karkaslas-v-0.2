(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Masaüstü/karkaslas/alternatif-lastik-app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthPage",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Masaüstü/karkaslas/alternatif-lastik-app/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AuthPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex flex-col lg:flex-row bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full lg:w-1/2 h-64 lg:h-auto bg-slate-900 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/60 z-10"
                    }, void 0, false, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/placeholder.svg?height=1080&width=1080",
                        alt: "Tire Warehouse",
                        fill: true,
                        className: "object-cover opacity-80",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6 border border-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                    className: "w-12 h-12 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl lg:text-5xl font-bold mb-4 tracking-tight",
                                children: "Alternatif Lastik"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl lg:text-2xl font-light text-slate-200 max-w-md",
                                children: "Reliable B2B Tire Auctions"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex gap-4 text-sm font-medium text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Verified Corporate Partners"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Direct from Manufacturers"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-12 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md space-y-8 my-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center lg:text-left mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-900 dark:text-white",
                                    children: "Welcome Back"
                                }, void 0, false, {
                                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 mt-2",
                                    children: "Access the most comprehensive tire auction platform."
                                }, void 0, false, {
                                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-lg mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("login"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2.5 text-sm font-medium rounded-md transition-all duration-200", activeTab === "login" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"),
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("register"),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2.5 text-sm font-medium rounded-md transition-all duration-200", activeTab === "register" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"),
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        activeTab === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {}, void 0, false, {
                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                            lineNumber: 82,
                            columnNumber: 36
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegisterForm, {}, void 0, false, {
                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                            lineNumber: 82,
                            columnNumber: 52
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center text-sm text-slate-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2025 Alternatif Lastik. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AuthPage, "lRd5d81nQi4MeN9aWiu8JhNCHDs=");
_c = AuthPage;
function LoginForm() {
    _s1();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "email",
                                children: "Email Address"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "email",
                                placeholder: "name@company.com",
                                type: "email",
                                className: "h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "password",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-sm font-medium text-primary hover:underline",
                                        children: "Forgot password?"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "password",
                                        type: showPassword ? "text" : "password",
                                        className: "h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors pr-10"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPassword(!showPassword),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full h-11 text-base font-medium shadow-lg shadow-primary/20",
                children: "Sign In"
            }, void 0, false, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s1(LoginForm, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c1 = LoginForm;
function RegisterForm() {
    _s2();
    const [taxId, setTaxId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isValidTaxId, setIsValidTaxId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [acceptedProtocol, setAcceptedProtocol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [acceptedKvkk, setAcceptedKvkk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Simulate validation
    const handleTaxIdChange = (e)=>{
        const value = e.target.value;
        setTaxId(value);
        setIsValidTaxId(value.length === 10); // Simple validation simulation
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-blue-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            "Corporate Registration (B2B Only)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-700 mt-1",
                        children: "Please provide your official company details for verification."
                    }, void 0, false, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "taxId",
                                children: "Tax ID (VKN)"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "taxId",
                                        value: taxId,
                                        onChange: handleTaxIdChange,
                                        placeholder: "1234567890",
                                        maxLength: 10,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-11 transition-colors pr-10", isValidTaxId ? "bg-green-50 border-green-200 focus-visible:ring-green-500" : "bg-slate-50 border-slate-200")
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    isValidTaxId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            isValidTaxId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-green-600 font-medium",
                                children: "Valid Tax ID format"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 187,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "companyName",
                                children: "Company Full Name"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "companyName",
                                placeholder: "Acme Logistics Ltd. Sti.",
                                className: "h-11 bg-slate-50 border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "sector",
                                        children: "Sector"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "sector",
                                                className: "flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        selected: true,
                                                        children: "Select Sector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "automotive",
                                                        children: "Automotive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "logistics",
                                                        children: "Logistics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "retail",
                                                        children: "Retail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "subActivity",
                                        children: "Sub-Activity Area"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "subActivity",
                                                className: "flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        selected: true,
                                                        children: "Select Activity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "tires",
                                                        children: "Tire Sales"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "service",
                                                        children: "Vehicle Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "fleet",
                                                        children: "Fleet Management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "commercialCode",
                                        children: "Commercial Card Code (Cari Kart Kodu)"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: "Optional"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "commercialCode",
                                placeholder: "C-12345",
                                className: "h-11 bg-slate-50 border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "authName",
                                        children: "Authorized Person"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "authName",
                                        placeholder: "John Doe",
                                        className: "h-11 bg-slate-50 border-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "authPhone",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "authPhone",
                                        placeholder: "+90 555 000 0000",
                                        className: "h-11 bg-slate-50 border-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                children: "Full Address"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        selected: true,
                                                        children: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "istanbul",
                                                        children: "Istanbul"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ankara",
                                                        children: "Ankara"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "izmir",
                                                        children: "Izmir"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        selected: true,
                                                        children: "District"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "kadikoy",
                                                        children: "Kadikoy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "besiktas",
                                                        children: "Besiktas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "sisli",
                                                        children: "Sisli"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Street, Building No, Floor...",
                                className: "h-11 bg-slate-50 border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 pt-4 border-t border-slate-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: "protocol",
                                checked: acceptedProtocol,
                                onChange: (e)=>setAcceptedProtocol(e.target.checked),
                                className: "mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "protocol",
                                className: "text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                children: [
                                    "I accept the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-primary hover:underline font-medium",
                                        children: "B2B Auction Protocol"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 26
                                    }, this),
                                    " and agree to the terms of service."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: "kvkk",
                                checked: acceptedKvkk,
                                onChange: (e)=>setAcceptedKvkk(e.target.checked),
                                className: "mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "kvkk",
                                className: "text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                children: [
                                    "I accept the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-primary hover:underline font-medium",
                                        children: "KVKK Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 26
                                    }, this),
                                    " regarding personal data protection."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full h-12 text-base font-medium shadow-lg shadow-primary/20",
                disabled: !acceptedProtocol || !acceptedKvkk,
                children: [
                    "Create Corporate Account",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Masa$fc$st$fc2f$karkaslas$2f$alternatif$2d$lastik$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "ml-2 h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Masaüstü/karkaslas/alternatif-lastik-app/components/auth-page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s2(RegisterForm, "slghQzSj4w1ss1pgbp7IrZcIYws=");
_c2 = RegisterForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AuthPage");
__turbopack_context__.k.register(_c1, "LoginForm");
__turbopack_context__.k.register(_c2, "RegisterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Masa%C3%BCst%C3%BC_karkaslas_alternatif-lastik-app_696067d1._.js.map