export default function EditorialLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-vyr-wine-dark selection:bg-vyr-wine/50 selection:text-white">
            {children}
        </div>
    );
}
