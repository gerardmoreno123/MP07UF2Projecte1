<template>
  <div class="min-h-[calc(100vh-8rem)] bg-base-200">
    <!-- Hero Section -->
    <div class="hero py-12 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Benvinguts a Vue SPA</h1>
          <p class="py-6">Una aplicació moderna construïda amb Vue 3, amb calculadora, integracions d'API i disseny responsiu.</p>
          <div class="flex gap-4 justify-center">
            <router-link to="/calculator" class="btn btn-primary">Prova la Calculadora</router-link>
            <router-link to="/comments" class="btn btn-secondary">Veure Comentaris</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-base-100">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Característiques Principals</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-200">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 class="text-xl font-bold">Calculadora Avançada</h3>
              <p>Realitza càlculs complexos amb una interfície intuïtiva i moderna.</p>
            </div>
          </div>
          <div class="card bg-base-200">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h3 class="text-xl font-bold">Gestió de Comentaris</h3>
              <p>Sistema complet per veure i gestionar comentaris en temps real.</p>
            </div>
          </div>
          <div class="card bg-base-200">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 class="text-xl font-bold">Gestió d'Usuaris</h3>
              <p>Visualitza i administra els usuaris amb una interfície moderna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="py-12 bg-base-300">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Per què escollir-nos?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="rounded-full bg-primary p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Rendiment Òptim</h3>
              <p>Aplicació ràpida i eficient gràcies a Vue 3 i Vite.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="rounded-full bg-secondary p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Seguretat Avançada</h3>
              <p>Implementació segura amb les millors pràctiques de seguretat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="py-12 bg-base-200">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Preparat per començar?</h2>
        <p class="mb-8">Descobreix totes les funcionalitats que oferim per millorar la teva experiència.</p>
        <div class="flex gap-4 justify-center">
          <router-link to="/users" class="btn btn-primary">Explora Usuaris</router-link>
          <router-link to="/calculator" class="btn btn-secondary">Obre Calculadora</router-link>
        </div>
      </div>
    </div>
  </div>
</template>